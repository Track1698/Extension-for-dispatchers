# Self-elevate if not running as administrator
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    # Re-launch the script with administrator privileges
    $arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`""
    Start-Process powershell -Verb RunAs -ArgumentList $arguments
    exit
}
# vpn.ps1

# Set debug mode if needed.
$DEBUG_MODE = $true

# Function to add temporary routes
function Add-Routes {
    Write-Host "Adding static routes (temporary)..."
    route add 20.241.170.106 mask 255.255.255.255 192.168.1.50
    route add 170.218.212.32 mask 255.255.255.255 192.168.1.50
    route add 170.218.247.28 mask 255.255.255.255 192.168.1.50
    route add 23.49.180.57 mask 255.255.255.255 192.168.1.50
    route add 34.172.230.133 mask 255.255.255.255 192.168.1.50
    route add 34.121.25.40 mask 255.255.255.255 192.168.1.50
    route add 104.18.6.3 mask 255.255.255.255 192.168.1.50
    route add 104.18.7.3 mask 255.255.255.255 192.168.1.50
    route add 20.253.113.3 mask 255.255.255.255 192.168.1.50
    Write-Host "Routes added successfully."
}

# Function to add permanent routes
function Add-RoutesPermanent {
    Write-Host "Adding static routes (permanent)..."
    route -p add 20.241.170.106 mask 255.255.255.255 192.168.1.50
    route -p add 170.218.212.32 mask 255.255.255.255 192.168.1.50
    route -p add 104.18.6.3 mask 255.255.255.255 192.168.1.50
    route -p add 104.18.7.3 mask 255.255.255.255 192.168.1.50
    route -p add 20.253.113.3 mask 255.255.255.255 192.168.1.50
    Write-Host "Permanent routes added successfully."
}

# Function to remove routes
function Remove-Routes {
    Write-Host "Removing static routes..."
    route delete 20.241.170.106
    route delete 170.218.212.32
    route delete 104.18.6.3
    route delete 104.18.7.3
    route delete 20.253.113.3
    Write-Host "Routes removed successfully."
}

# Function to check WiFi SSID and choose routes
function Auto-Mode {
    Write-Host "Auto mode: checking current WiFi SSID..."
    $netshOutput = netsh wlan show interfaces
    $match = $netshOutput | Select-String -Pattern "SSID\s+:\s+(.*)$"
    if ($match) {
        $ssid = $match.Matches[0].Groups[1].Value.Trim()
    }
    else {
        Write-Host "Could not determine SSID."
        return
    }
    Write-Host "Current SSID is: $ssid"
    if ($ssid -eq "5G") {
        Write-Host "SSID is 5G, adding routes..."
        Add-Routes
    }
    else {
        Write-Host "SSID is not 5G, removing routes..."
        Remove-Routes
    }
}

# Function to update the XML and create/update the scheduled task
function Update-Task {
    Write-Host "Creating/updating scheduled task for network change auto adjustment..."
    $xmlFile = "C:\DispatchTracker\Extension-for-dispatchers-main\task.xml"
    
    # Read and update the XML file:
    # 1. Update the <Author> element with the current user.
    # 2. Change the <LogonType> to InteractiveToken so no password is required.
    $content = Get-Content $xmlFile
    $content = $content -replace '<Author>.*?</Author>', "<Author>$($env:USERDOMAIN)\$($env:USERNAME)</Author>"
    $content = $content -replace '<LogonType>.*?</LogonType>', "<LogonType>InteractiveToken</LogonType>"
    $content | Set-Content $xmlFile

    if ($DEBUG_MODE) {
        Write-Host "============================"
        Write-Host "Contents of XML file after update:"
        Get-Content $xmlFile | ForEach-Object { Write-Host $_ }
        Write-Host "============================"
    }

    schtasks /Create /TN "NetworkStaticRouteTask" /XML $xmlFile /F

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Scheduled task created/updated successfully."
    }
    else {
        Write-Host "Failed to create/update scheduled task. Error code: $LASTEXITCODE"
    }
}

# Main menu / argument processing
if ($args.Count -gt 0) {
    $choice = $args[0]
} else {
    Write-Host ""
    Write-Host "What do you want to do?"
    Write-Host "1) Add routes now (temporary)"
    Write-Host "2) Remove routes now"
    Write-Host "3) Create/update scheduled task (auto adjust on network change)"
    Write-Host "4) Add routes permanently (with -p flag)"
    $choice = Read-Host "Enter 1, 2, 3, or 4"
}

switch ($choice.ToUpper()) {
    "AUTO" { Auto-Mode }
    "1"    { Add-Routes }
    "2"    { Remove-Routes }
    "3"    { Update-Task }
    "4"    { Add-RoutesPermanent }
    default { Write-Host "Invalid selection. Exiting." }
}
