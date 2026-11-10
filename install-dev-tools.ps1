# ==============================================================================
# Qalibrate Developer Setup Script for Windows
# Run in PowerShell: powershell -ExecutionPolicy Bypass -File .\install-dev-tools.ps1
# ==============================================================================

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Starting Development Environment Setup for Qalibrate...  " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$packages = @(
    @{ Name = "Node.js (LTS)"; Id = "OpenJS.NodeJS.LTS" },
    @{ Name = "Git for Windows"; Id = "Git.Git" },
    @{ Name = "Python 3.12"; Id = "Python.Python.3.12" }
)

foreach ($pkg in $packages) {
    Write-Host "[*] Installing $($pkg.Name)..." -ForegroundColor Yellow
    winget install --id $pkg.Id -e --silent --accept-source-agreements --accept-package-agreements
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[+] Successfully installed $($pkg.Name)!" -ForegroundColor Green
    } else {
        Write-Host "[-] $($pkg.Name) installation finished with code $LASTEXITCODE (or already installed)." -ForegroundColor DarkYellow
    }
    Write-Host ""
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " Setup Complete! " -ForegroundColor Green
Write-Host " IMPORTANT: Please restart your terminal/IDE for PATH changes to take effect." -ForegroundColor Magenta
Write-Host "==========================================================" -ForegroundColor Cyan
