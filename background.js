const _0x20f72d = _0x5491;
(function (_0x31d084, _0x21f0fc) {
  const _0xaf8b66 = _0x5491,
    _0x4b15c0 = _0x31d084();
  while (!![]) {
    try {
      const _0x31413f =
        -parseInt(_0xaf8b66(0xff)) / 0x1 +
        (-parseInt(_0xaf8b66(0xd3)) / 0x2) * (parseInt(_0xaf8b66(0xfd)) / 0x3) +
        parseInt(_0xaf8b66(0xda)) / 0x4 +
        (-parseInt(_0xaf8b66(0xd4)) / 0x5) * (parseInt(_0xaf8b66(0xde)) / 0x6) +
        (-parseInt(_0xaf8b66(0xe8)) / 0x7) *
          (-parseInt(_0xaf8b66(0x101)) / 0x8) +
        -parseInt(_0xaf8b66(0xca)) / 0x9 +
        parseInt(_0xaf8b66(0xf5)) / 0xa;
      if (_0x31413f === _0x21f0fc) break;
      else _0x4b15c0["push"](_0x4b15c0["shift"]());
    } catch (_0x237308) {
      _0x4b15c0["push"](_0x4b15c0["shift"]());
    }
  }
})(_0x53cd, 0xbfca9);
let searches = [],
  authToken,
  searching = ![],
  intervalId,
  savedData = {},
  notificationCount = 0x0;
const lowerBoundInSeconds = 0x5,
  upperBoundInSeconds = 0xf,
  lowerBoundMilliseconds = lowerBoundInSeconds * 0x3e8,
  upperBoundMilliseconds = upperBoundInSeconds * 0x3e8;
chrome["webRequest"][_0x20f72d(0xc8)]["addListener"](
  function (_0x1af7a9) {
    const _0x8e021c = _0x20f72d;
    if (
      _0x1af7a9[_0x8e021c(0xcb)] === _0x8e021c(0xdd) &&
      _0x1af7a9[_0x8e021c(0xc5)] === _0x8e021c(0xc7)
    ) {
      let _0x3f0e53 = _0x1af7a9[_0x8e021c(0xe0)][_0x8e021c(0xba)](
        (_0xdf301e) => _0xdf301e[_0x8e021c(0xe4)] === _0x8e021c(0xd2)
      );
      if (_0x3f0e53) {
        const _0x12c931 = _0x3f0e53[_0x8e021c(0xb8)];
        authToken !== _0x12c931 &&
          (chrome[_0x8e021c(0xcc)][_0x8e021c(0x104)][_0x8e021c(0xea)](
            { authToken: _0x12c931 },
            function () {
              const _0x537761 = _0x8e021c;
              console["log"](_0x537761(0x10d));
            }
          ),
          (authToken = _0x12c931));
      }
    }
  },
  { urls: [_0x20f72d(0xf3)] },
  [_0x20f72d(0xe0)]
);
function cleanSavedData(_0xfbe384, _0x1c562f) {
  const _0x404eea = _0x20f72d,
    _0x338a06 = _0xfbe384[_0x404eea(0xf2)](
      (_0x4b2b12) => _0x4b2b12[_0x404eea(0xf0)]
    ),
    _0x3a8267 = Object[_0x404eea(0x106)](_0x1c562f);
  _0x3a8267["forEach"]((_0x156414) => {
    !_0x338a06["includes"](_0x156414) && delete _0x1c562f[_0x156414];
  });
}
function search(_0x534f96, _0x4e08cd) {
  const _0x257d33 = _0x20f72d;
  if (!authToken) {
    chrome["tabs"][_0x257d33(0xcf)]({ url: _0x257d33(0x100), active: ![] });
    return;
  }
  fetch(_0x257d33(0x107), {
    method: _0x257d33(0xf6),
    headers: { "Content-Type": _0x257d33(0xbb), Authorization: authToken },
    body: JSON[_0x257d33(0xc6)](_0x4e08cd),
  })
    [_0x257d33(0xf4)]((_0x5e4475) => _0x5e4475[_0x257d33(0xd6)]())
    [_0x257d33(0xf4)]((_0x30d709) => {
      const _0x5397c3 = _0x257d33;
      console[_0x5397c3(0xb5)](_0x534f96, _0x30d709),
        handleDataFinal(_0x30d709, _0x534f96);
    })
    ["catch"]((_0x4bcc30) => {
      const _0x45570b = _0x257d33;
      console[_0x45570b(0xe6)](_0x45570b(0xdb) + _0x534f96 + ":", _0x4bcc30);
    });
}
function doSearch() {
  const _0x11f014 = _0x20f72d;
  searching
    ? searches["forEach"](function (_0x39289a) {
        const { searchName: _0x134521, searchData: _0x5114bb } = _0x39289a;
        search(_0x134521, _0x5114bb);
      })
    : (clearInterval(intervalId),
      (savedData = {}),
      console["log"](_0x11f014(0xc0), savedData));
}
function startRandomIntervalSearching() {
  const _0x57f8b5 =
    Math["floor"](
      Math["random"]() * (upperBoundMilliseconds - lowerBoundMilliseconds + 0x1)
    ) + lowerBoundMilliseconds;
  intervalId = setInterval(doSearch, _0x57f8b5);
}
function handleData(_0x4ea437, _0x23d77b) {
  const _0x99cb37 = _0x20f72d;
  console[_0x99cb37(0xb5)](_0x99cb37(0xb9), savedData);
  if (savedData[_0x23d77b]) {
    const _0x4d2ef0 = savedData[_0x23d77b],
      _0x3dcaee = _0x4ea437[_0x99cb37(0xb6)][_0x99cb37(0xbd)]((_0x3088f3) => {
        const _0x27e363 = _0x99cb37,
          _0x3e88f9 = _0x4d2ef0[_0x27e363(0xb6)][_0x27e363(0x108)](
            (_0x30c2ad) => _0x30c2ad["id"] !== _0x3088f3["id"]
          );
        return _0x3e88f9;
      });
    return (
      (savedData[_0x23d77b] = {
        items: _0x4d2ef0[_0x99cb37(0xb6)][_0x99cb37(0xbc)](_0x3dcaee),
        count: _0x4ea437["count"],
        totalRecords: _0x4ea437["totalRecords"],
      }),
      console[_0x99cb37(0xb5)](_0x3dcaee),
      _0x3dcaee
    );
  } else
    return (
      (savedData[_0x23d77b] = {
        items: _0x4ea437[_0x99cb37(0xb6)],
        count: _0x4ea437["count"],
        totalRecords: _0x4ea437[_0x99cb37(0xd7)],
      }),
      console[_0x99cb37(0xb5)]("New\x20data\x20saved:\x20", savedData),
      []
    );
}
function handleDataFinal(_0x40f85b, _0x2c196b) {
  const _0x2ce3b8 = _0x20f72d,
    _0x267399 = handleData(_0x40f85b, _0x2c196b);
  _0x267399[_0x2ce3b8(0xef)] > 0x0 &&
    (playSound(_0x2ce3b8(0xf1), 0.5),
    showNotification(_0x2ce3b8(0xed) + _0x2c196b, _0x2ce3b8(0xc1)),
    chrome[_0x2ce3b8(0xcc)][_0x2ce3b8(0x104)][_0x2ce3b8(0xe3)](
      [_0x2ce3b8(0xeb)],
      function (_0x5cb6bb) {
        const _0x5e8fd2 = _0x2ce3b8;
        let _0x2da7e8 = _0x5cb6bb[_0x5e8fd2(0xeb)] || [];
        _0x267399[_0x5e8fd2(0xe5)]((_0x47d4cf) => {
          const _0x54848b = _0x5e8fd2;
          (_0x47d4cf[_0x54848b(0xe4)] = _0x2c196b),
            (_0x47d4cf["sortingDate"] = new Date(_0x47d4cf[_0x54848b(0xb4)]));
        }),
          (_0x2da7e8 = _0x2da7e8[_0x5e8fd2(0xbc)](_0x267399)),
          _0x2da7e8[_0x5e8fd2(0x10c)](
            (_0x3f846d, _0x35c918) =>
              _0x35c918[_0x5e8fd2(0x102)] - _0x3f846d[_0x5e8fd2(0x102)]
          ),
          console[_0x5e8fd2(0xb5)](_0x5e8fd2(0xd0), _0x2da7e8),
          chrome[_0x5e8fd2(0xcc)][_0x5e8fd2(0x104)][_0x5e8fd2(0xea)](
            { storedData: _0x2da7e8 },
            function () {
              const _0x2339f2 = _0x5e8fd2;
              console["log"](_0x2339f2(0xcd)),
                chrome[_0x2339f2(0xc4)]["sendMessage"]({
                  action: _0x2339f2(0xc2),
                });
            }
          );
      }
    ));
}
function _0x53cd() {
  const _0xa4b30a = [
    "<all_urls>",
    "then",
    "24259700elzpAN",
    "POST",
    "email",
    "reason",
    "basic",
    "companyId",
    "update",
    "default.wav",
    "355659ENnffu",
    "shared_module_update",
    "1067956Rgarhv",
    "https://app.centraldispatch.com/search",
    "1456bAICKJ",
    "sortingDate",
    "onInstalled",
    "local",
    "changedSearch",
    "keys",
    "https://dispatch-extension-2wrl4gpsga-uc.a.run.app/api/search",
    "every",
    "Extension\x20updated",
    "notifications",
    "searches",
    "sort",
    "Updated\x20auth\x20token:",
    "createdDate",
    "log",
    "items",
    "addListener",
    "value",
    "Saved\x20data:\x20",
    "find",
    "application/json",
    "concat",
    "filter",
    "sendMessage",
    "onMessage",
    "Saved\x20data\x20cleared:\x20",
    "There\x20is\x20a\x20new\x20posted\x20load\x20on\x20CentralDispatch",
    "storedDataUpdated",
    "remove",
    "runtime",
    "initiator",
    "stringify",
    "https://app.centraldispatch.com",
    "onBeforeSendHeaders",
    "hasOwnProperty",
    "8616213swTewX",
    "method",
    "storage",
    "Data\x20stored\x20in\x20local\x20storage",
    "createDocument",
    "create",
    "Stored\x20Data:\x20",
    "onStartup",
    "Authorization",
    "2JghJBH",
    "58675HQkFiR",
    "Searches\x20changed",
    "json",
    "totalRecords",
    "Extension\x20installed\x20or\x20temporarily\x20installed",
    "install",
    "2939760qOZYwi",
    "Error\x20during\x20search\x20for\x20",
    "chrome_update",
    "GET",
    "738CuBUjh",
    "./assets/48.png",
    "requestHeaders",
    "Extension\x20installed",
    "testing",
    "get",
    "name",
    "forEach",
    "error",
    "Data\x20cleared\x20from\x20storage",
    "46613ZnXKUU",
    "offscreen.html",
    "set",
    "storedData",
    "hasDocument",
    "New\x20post\x20for\x20",
    "install_temporary",
    "length",
    "searchName",
    "./assets/notification.wav",
    "map",
  ];
  _0x53cd = function () {
    return _0xa4b30a;
  };
  return _0x53cd();
}
function showNotification(_0x31b101, _0x450cfb) {
  const _0x29305d = _0x20f72d;
  chrome[_0x29305d(0x10a)][_0x29305d(0xcf)]({
    type: _0x29305d(0xf9),
    iconUrl: _0x29305d(0xdf),
    title: _0x31b101,
    message: _0x450cfb,
  });
}
function _0x5491(_0x59afd3, _0x9085c) {
  const _0x53cda8 = _0x53cd();
  return (
    (_0x5491 = function (_0x5491fb, _0x4cc10b) {
      _0x5491fb = _0x5491fb - 0xb4;
      let _0x2f36cb = _0x53cda8[_0x5491fb];
      return _0x2f36cb;
    }),
    _0x5491(_0x59afd3, _0x9085c)
  );
}
function updateSearchList() {
  const _0x3b12c6 = _0x20f72d;
  chrome[_0x3b12c6(0xcc)][_0x3b12c6(0x104)][_0x3b12c6(0xe3)](
    [_0x3b12c6(0x10b)],
    function (_0x596997) {
      const _0x4cffa9 = _0x3b12c6;
      _0x596997[_0x4cffa9(0xc9)](_0x4cffa9(0x10b))
        ? ((searches = _0x596997[_0x4cffa9(0x10b)] || []),
          cleanSavedData(searches, savedData))
        : console[_0x4cffa9(0xb5)]("No\x20searches\x20found\x20in\x20storage");
    }
  );
}
function stopSearching() {
  searching = ![];
}
function startSearching() {
  (searching = !![]), startRandomIntervalSearching();
}
chrome["runtime"][_0x20f72d(0xbf)]["addListener"](function (
  _0x22eafc,
  _0x130934,
  _0x3c2fac
) {
  const _0x23e690 = _0x20f72d;
  _0x22eafc["action"] === _0x23e690(0x105) &&
    (console[_0x23e690(0xb5)](_0x23e690(0xd5)),
    updateSearchList(),
    !searching &&
      setTimeout(() => {
        startSearching();
      }, 0x12c));
});
async function playSound(_0x3375f8 = _0x20f72d(0xfc), _0x1b1bc8 = 0x1) {
  const _0x33a989 = _0x20f72d;
  await createOffscreen(),
    await chrome["runtime"][_0x33a989(0xbe)]({
      play: { source: _0x3375f8, volume: _0x1b1bc8 },
    });
}
async function createOffscreen() {
  const _0x44f50c = _0x20f72d;
  if (await chrome["offscreen"][_0x44f50c(0xec)]()) return;
  await chrome["offscreen"][_0x44f50c(0xce)]({
    url: _0x44f50c(0xe9),
    reasons: ["AUDIO_PLAYBACK"],
    justification: _0x44f50c(0xe2),
  });
}
function clearStoredData() {
  const _0x2c36bc = _0x20f72d;
  chrome["storage"]["local"][_0x2c36bc(0xc3)](
    [
      "storedData",
      "authToken",
      _0x2c36bc(0xf7),
      "loginKey",
      _0x2c36bc(0xfa),
      "blacklist",
      _0x2c36bc(0x10b),
    ],
    function () {
      const _0x45ba9d = _0x2c36bc;
      console[_0x45ba9d(0xb5)](_0x45ba9d(0xe7));
    }
  );
}
chrome[_0x20f72d(0xc4)][_0x20f72d(0x103)][_0x20f72d(0xb7)](function (
  _0xb85b2d
) {
  const _0x4301de = _0x20f72d;
  if (_0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xd9))
    console[_0x4301de(0xb5)](_0x4301de(0xe1));
  else {
    if (_0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xfb))
      console[_0x4301de(0xb5)](_0x4301de(0x109));
    else {
      if (
        _0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xdc) ||
        _0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xfe)
      )
        console[_0x4301de(0xb5)]("Chrome\x20or\x20shared\x20module\x20updated");
      else
        (_0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xd9) ||
          _0xb85b2d[_0x4301de(0xf8)] === _0x4301de(0xee)) &&
          console["log"](_0x4301de(0xd8));
    }
  }
  clearStoredData();
}),
  chrome[_0x20f72d(0xc4)][_0x20f72d(0xd1)][_0x20f72d(0xb7)](function () {
    const _0x245836 = _0x20f72d;
    console[_0x245836(0xb5)]("Extension\x20started"), clearStoredData();
  });
