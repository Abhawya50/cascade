$dataPath = "C:\Users\sawar\.gemini\antigravity\scratch\cascade-app\data.js"
$text = [System.IO.File]::ReadAllText($dataPath)

# Count questions
$matches = [regex]::Matches($text, 'id:\s*"JEE-PYQ-(\d+)"')
Write-Host "Total questions found: $($matches.Count)"

$indices = @()
foreach ($m in $matches) {
    $indices += [int]$m.Groups[1].Value
}

Write-Host "Min question id: $(($indices | Measure-Object -Minimum).Minimum)"
Write-Host "Max question id: $(($indices | Measure-Object -Maximum).Maximum)"

# Check brackets and braces
$openBrackets = ($text.ToCharArray() | Where-Object { $_ -eq '[' }).Count
$closeBrackets = ($text.ToCharArray() | Where-Object { $_ -eq ']' }).Count
Write-Host "Brackets: Open=$openBrackets, Close=$closeBrackets (Balanced: $($openBrackets -eq $closeBrackets))"

$openBraces = ($text.ToCharArray() | Where-Object { $_ -eq '{' }).Count
$closeBraces = ($text.ToCharArray() | Where-Object { $_ -eq '}' }).Count
Write-Host "Braces: Open=$openBraces, Close=$closeBraces (Balanced: $($openBraces -eq $closeBraces))"
