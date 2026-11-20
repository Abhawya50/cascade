$dataPath = "C:\Users\sawar\.gemini\antigravity\scratch\cascade-app\data.js"
$text = [System.IO.File]::ReadAllText($dataPath)
$topicMatches = [regex]::Matches($text, 'topic:\s*"([^"]+)"')
$topics = @{}
foreach ($m in $topicMatches) {
    $t = $m.Groups[1].Value
    if (-not $topics.ContainsKey($t)) { $topics[$t] = 0 }
    $topics[$t]++
}

Write-Host "Topic breakdown:"
foreach ($k in $topics.Keys) {
    Write-Host "- $k : $($topics[$k]) questions"
}
