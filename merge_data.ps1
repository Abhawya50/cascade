# Read existing data.js
$dataPath = "C:\Users\sawar\.gemini\antigravity\scratch\cascade-app\data.js"
$content = [System.IO.File]::ReadAllText($dataPath)

# Find the closing ]; at the end
$lastBracketIdx = $content.LastIndexOf("];")
if ($lastBracketIdx -lt 0) {
    Write-Error "Could not find closing ]; in data.js"
    exit 1
}

$prefix = $content.Substring(0, $lastBracketIdx).TrimEnd()
if (-not $prefix.EndsWith(",")) {
    $prefix += ","
}

# Read part7.js to part16.js
$partsDir = "C:\Users\sawar\.gemini\antigravity\scratch\cascade-app\parts2"
$newParts = @()

for ($i = 7; $i -le 16; $i++) {
    $partFile = Join-Path $partsDir "part$i.js"
    if (Test-Path $partFile) {
        $partContent = [System.IO.File]::ReadAllText($partFile).Trim()
        $newParts += $partContent
        Write-Host "Loaded part$i.js"
    } else {
        Write-Error "Missing $partFile"
        exit 1
    }
}

$combinedNew = ($newParts -join ",`n")

$finalContent = @"
$prefix
$combinedNew
];
"@

[System.IO.File]::WriteAllText($dataPath, $finalContent, [System.Text.Encoding]::UTF8)
Write-Host "Successfully wrote complete data.js"
