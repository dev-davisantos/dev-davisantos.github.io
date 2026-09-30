<#
  Gera a imagem de compartilhamento do site (public/og-image.png, 1200x630).

  Roda com o .NET do próprio Windows (System.Drawing) — nenhuma dependência npm.
  Uso:  npm run og      (ou)  powershell -File scripts/generate-og.ps1

  Para mudar o visual, ajuste as cores e os textos aqui embaixo e rode de novo.
#>

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

function Get-Color([string] $hex) {
  return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outputPath = Join-Path (Split-Path -Parent $scriptDir) 'public\og-image.png'

$width = 1200
$height = 630

$brand = 'dev.davisantos'
$name = 'Davi Santos'
$role = 'Software Engineering / Software Development'
$stack = 'React | TypeScript | APIs REST'
$codename = 'codename: razor'

$navyDeep = Get-Color '#081A2D'
$navy = Get-Color '#0E2947'
$navy2 = Get-Color '#163B5C'
$greenBright = Get-Color '#008F78'
$greenText = Get-Color '#00A98F'
$grayLight = Get-Color '#CECDD2'
$gray = Get-Color '#7E7D82'

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

try {
  # fundo em degradê
  $canvas = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
  $background = New-Object System.Drawing.Drawing2D.LinearGradientBrush($canvas, $navyDeep, $navy2, 20)
  $graphics.FillRectangle($background, $canvas)
  $background.Dispose()

  # linhas de lamina na diagonal (mesma linguagem visual do site).
  # Ficam posicionadas para passar FORA do bloco de texto.
  $bladePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(150, $greenBright), 2)
  $graphics.DrawLine($bladePen, -100, 700, 1300, 252)
  $bladePen.Dispose()

  $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(50, $grayLight), 1)
  $graphics.DrawLine($linePen, -100, 780, 1300, 332)
  $graphics.DrawLine($linePen, -100, 250, 1300, -198)
  $linePen.Dispose()

  # marca (mono) + fio verde
  $brandFont = New-Object System.Drawing.Font('Consolas', 24, [System.Drawing.FontStyle]::Regular)
  $brandBrush = New-Object System.Drawing.SolidBrush($greenText)
  $graphics.DrawString($brand, $brandFont, $brandBrush, 80, 96)
  $graphics.FillRectangle($brandBrush, 80, 142, 120, 3)

  # nome
  $nameFont = New-Object System.Drawing.Font('Segoe UI', 68, [System.Drawing.FontStyle]::Bold)
  $textBrush = New-Object System.Drawing.SolidBrush($grayLight)
  $graphics.DrawString($name, $nameFont, $textBrush, 72, 176)

  # cargo
  $roleFont = New-Object System.Drawing.Font('Segoe UI', 26, [System.Drawing.FontStyle]::Regular)
  $mutedBrush = New-Object System.Drawing.SolidBrush($grayLight)
  $graphics.DrawString($role, $roleFont, $mutedBrush, 80, 300)

  # stack
  $stackFont = New-Object System.Drawing.Font('Consolas', 22, [System.Drawing.FontStyle]::Regular)
  $graphics.DrawString($stack, $stackFont, $brandBrush, 80, 356)

  # assinatura discreta
  $codenameFont = New-Object System.Drawing.Font('Consolas', 18, [System.Drawing.FontStyle]::Regular)
  $codenameBrush = New-Object System.Drawing.SolidBrush($gray)
  $graphics.DrawString($codename, $codenameFont, $codenameBrush, 80, 528)

  # canto cortado (detalhe de lamina)
  $cutBrush = New-Object System.Drawing.SolidBrush($greenBright)
  $cutPoints = @(
    (New-Object System.Drawing.Point(($width - 60), 0)),
    (New-Object System.Drawing.Point($width, 0)),
    (New-Object System.Drawing.Point($width, 60))
  )
  $graphics.FillPolygon($cutBrush, $cutPoints)

  $cutBrush.Dispose()
  $codenameBrush.Dispose()
  $codenameFont.Dispose()
  $stackFont.Dispose()
  $mutedBrush.Dispose()
  $roleFont.Dispose()
  $textBrush.Dispose()
  $nameFont.Dispose()
  $brandBrush.Dispose()
  $brandFont.Dispose()

  $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  $graphics.Dispose()
  $bitmap.Dispose()
}

Write-Output "og-image.png gerada em $outputPath"
