const axios = require("axios");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const serviceAccount = require("./dispatchservice.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://dispatch-744f3-default-rtdb.europe-west1.firebasedatabase.app/",
});

const app = express();

app.use(bodyParser.json());

const searchData = {
  vehicleCount: {
    min: 1,
    max: null,
  },
  postedWithinHours: null,
  tagListingsPostedWithin: 2,
  trailerTypes: [],
  paymentTypes: [],
  vehicleTypes: [],
  operability: "All",
  minimumPaymentTotal: null,
  readyToShipWithinDays: null,
  minimumPricePerMile: null,
  offset: 0,
  limit: 50,
  sortFields: [
    {
      name: "PICKUP",
      direction: "ASC",
    },
    {
      name: "DELIVERYMETROAREA",
      direction: "ASC",
    },
  ],
  shipperIds: [],
  desiredDeliveryDate: "01/15/2024",
  displayBlockedShippers: false,
  showPreferredShippersOnly: false,
  showTaggedOnTop: false,
  marketplaceIds: [],
  averageRating: "All",
  requestType: "Route",
  locations: [
    {
      city: "Dayton",
      state: "OH",
      id: "dayton, oh",
    },
    {},
    {
      city: "Hialeah",
      state: "FL",
      id: "hialeah, fl",
    },
  ],
  corridorWidth: 100,
};

app.post("/api/search", async (req, res) => {
  // You can access the request body using req.body
  const searchData = req.body;
  console.log("Received search data:");

  try {
    const response = await axios.post(
      `https://prod-search-app-bff.awscal2.manheim.com/api/${
        searchData.requestType === "Route" ? "route" : "open"
      }-search`,
      searchData,
      {
        headers: {
          authority: "prod-search-app-bff.awscal2.manheim.com",
          accept: "application/json",
          "accept-language": "en-US,en;q=0.8",
          authorization: `${req.headers.authorization}`,
          "content-type": "application/json",
          origin: "https://app.centraldispatch.com",
          referer: "https://app.centraldispatch.com/",
          "sec-ch-ua":
            '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-gpc": "1",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } // For demonstration purposes, let's log the received data
});

app.post("/api/checklogin", async (req, res) => {
  try {
    const { email, loginKey, companyId } = req.body;
    const companyRef = admin.database().ref(`registeredCompanies/${companyId}`);
    const companyData = await companyRef.once("value");
    const company = companyData.val();

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    if (
      email === company.admin.email &&
      loginKey === company.admin.credentials.loginKey
    ) {
      return res.json({ message: "Admin login successful" });
    }

    const user = company.users.find((user) => user.email === email);

    if (!user || user.credentials.loginKey !== loginKey) {
      return res
        .status(404)
        .json({ error: "User not found or invalid login key" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the login data" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminSnapshot = await admin
      .database()
      .ref("registeredCompanies")
      .orderByChild("admin/email")
      .equalTo(email)
      .once("value");

    if (adminSnapshot.exists()) {
      const companyId = Object.keys(adminSnapshot.val())[0];
      const adminData = adminSnapshot.val()[companyId];

      if (adminData.admin.credentials.password === password) {
        let loginKey = adminData.admin.credentials.loginKey;

        if (!loginKey) {
          loginKey = generateLoginKey();
          await admin
            .database()
            .ref("registeredCompanies")
            .child(companyId)
            .update({ "admin/credentials/loginKey": loginKey });
        }

        return res.json({
          email,
          loginKey,
          companyId,
          blacklist: adminData.companyBlacklist,
        });
      }
    }

    const companiesSnapshot = await admin
      .database()
      .ref("registeredCompanies")
      .once("value");

    if (companiesSnapshot.exists()) {
      const companies = companiesSnapshot.val();

      for (const companyId in companies) {
        const company = companies[companyId];

        for (let i = 0; i < company.users.length; i++) {
          const user = company.users[i];

          if (user.email === email && user.credentials.password === password) {
            let loginKey = user.credentials.loginKey;

            if (!loginKey) {
              loginKey = generateLoginKey();
              await admin
                .database()
                .ref("registeredCompanies")
                .child(companyId)
                .child("users")
                .child(i)
                .update({ "credentials/loginKey": loginKey });
            }

            return res.json({
              email,
              loginKey,
              companyId,
              blacklist: user.userBlacklist,
            });
          }
        }
      }
    }

    return res.status(401).json({ error: "Invalid email or password" });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the login data" });
  }
});

app.post("/api/updateblacklist", async (req, res) => {
  try {
    const { companyId, email, name, address } = req.body;

    if (!companyId || !email || !name || !address) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const companyRef = admin.database().ref(`registeredCompanies/${companyId}`);
    const companySnapshot = await companyRef.once("value");

    if (companySnapshot.exists()) {
      const isAdmin = companySnapshot.child("admin/email").val() === email;

      if (isAdmin) {
        await companyRef.child("companyBlacklist").push({ name, address });
      } else {
        const userSnapshot = companySnapshot
          .child("users")
          .find((user) => user.child("email").val() === email);

        if (userSnapshot) {
          await userSnapshot.child("userBlacklist").push({ name, address });
        } else {
          return res.status(403).json({ error: "Permission denied" });
        }
      }

      // Fetch the updated blacklist data based on user type
      let updatedBlacklistSnapshot;
      if (isAdmin) {
        updatedBlacklistSnapshot = await companyRef
          .child("companyBlacklist")
          .once("value");
      } else {
        const userSnapshot = companySnapshot
          .child("users")
          .find((user) => user.child("email").val() === email);

        if (userSnapshot) {
          updatedBlacklistSnapshot = await userSnapshot
            .child("userBlacklist")
            .once("value");
        } else {
          return res.status(403).json({ error: "Permission denied" });
        }
      }

      const updatedBlacklist = [];
      updatedBlacklistSnapshot.forEach((blacklistItem) => {
        updatedBlacklist.push(blacklistItem.val());
      });

      return res
        .status(200)
        .json({ success: true, blacklist: updatedBlacklist });
    } else {
      return res.status(404).json({ error: "Company not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/autocomplete", async (req, res) => {
  const { apiKey, term } = req.body;
  const randomNineDigitNumber = Math.floor(
    100000000 + Math.random() * 900000000
  );
  const payload = { term, sessionId: randomNineDigitNumber };

  try {
    const response = await axios.get(
      "https://prod-search-app-bff.awscal2.manheim.com/api/locations/autocomplete",
      {
        params: payload,
        headers: {
          authority: "prod-search-app-bff.awscal2.manheim.com",
          accept: "application/json",
          "accept-language": "en-US,en;q=0.8",
          authorization: apiKey,
          origin: "https://app.centraldispatch.com",
          referer: "https://app.centraldispatch.com/",
          "sec-ch-ua":
            '"Not_A Brand";v="8", "Chromium";v="120", "Brave";v="120"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-gpc": "1",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error making request:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function generateLoginKey() {
  return crypto.randomBytes(15).toString("hex");
}
