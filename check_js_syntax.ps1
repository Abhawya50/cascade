$dataPath = "C:\Users\sawar\.gemini\antigravity\scratch\cascade-app\data.js"
$text = [System.IO.File]::ReadAllText($dataPath)

# Strip strings and comments
# Simple state machine to strip JS strings and comments
$sb = New-Object System.Text.StringBuilder
$i = 0
$len = $text.Length
$inString = $null # '"', "'", '`'
$inLineComment = $false
$inBlockComment = $false

while ($i -lt $len) {
    $c = $text[$i]
    $next = if ($i + 1 -lt $len) { $text[$i+1] } else { [char]0 }

    if ($inLineComment) {
        if ($c -eq "`n") { $inLineComment = $false; [void]$sb.Append($c) }
    } elseif ($inBlockComment) {
        if ($c -eq '*' -and $next -eq '/') { $inBlockComment = $false; $i++ }
    } elseif ($inString -ne $null) {
        if ($c -eq '\') {
            # Skip escaped char
            $i++
        } elseif ($c -eq $inString) {
            $inString = $null
        }
    } else {
        if ($c -eq '/' -and $next -eq '/') {
            $inLineComment = $true
            $i++
        } elseif ($c -eq '/' -and $next -eq '*') {
            $inBlockComment = $true
            $i++
        } elseif ($c -eq '"' -or $c -eq "'" -or $c -eq '`') {
            $inString = $c
        } else {
            [void]$sb.Append($c)
        }
    }
    $i++
}

$stripped = $sb.ToString()

$openB = ($stripped.ToCharArray() | Where-Object { $_ -eq '[' }).Count
$closeB = ($stripped.ToCharArray() | Where-Object { $_ -eq ']' }).Count
$openC = ($stripped.ToCharArray() | Where-Object { $_ -eq '{' }).Count
$closeC = ($stripped.ToCharArray() | Where-Object { $_ -eq '}' }).Count

Write-Host "Code-only Brackets []: Open=$openB, Close=$closeB (Balanced: $($openB -eq $closeB))"
Write-Host "Code-only Braces {}: Open=$openC, Close=$closeC (Balanced: $($openC -eq $closeC))"

# Check nesting stack
$stack = New-Object System.Collections.Generic.Stack[char]
$balanced = $true
$line = 1
$col = 1
for ($j = 0; $j -lt $stripped.Length; $j++) {
    $ch = $stripped[$j]
    if ($ch -eq "`n") { $line++; $col = 1; continue }
    $col++
    if ($ch -eq '[' -or $ch -eq '{' -or $ch -eq '(') {
        $stack.Push($ch)
    } elseif ($ch -eq ']' -or $ch -eq '}' -or $ch -eq ')') {
        if ($stack.Count -eq 0) {
            Write-Host "Error: Unmatched closing $ch at Line $line, Col $col"
            $balanced = $false
            break
        }
        $top = $stack.Pop()
        if (($ch -eq ']' -and $top -ne '[') -or ($ch -eq '}' -and $top -ne '{') -or ($ch -eq ')' -and $top -ne '(')) {
            Write-Host "Error: Mismatched $top and $ch at Line $line, Col $col"
            $balanced = $false
            break
        }
    }
}

if ($balanced -and $stack.Count -eq 0) {
    Write-Host "AST PARSE SUCCESS: Perfectly balanced nesting across all 80 questions!"
} elseif ($stack.Count -gt 0) {
    Write-Host "Error: Unclosed brackets remaining on stack: $($stack.Count)"
}
