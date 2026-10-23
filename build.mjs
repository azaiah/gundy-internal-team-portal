// Bundles src/ into one page at dist/index.html and copies public/ assets.
import { build } from 'esbuild'
import fs from 'fs'
const r = await build({ entryPoints: ['src/app.jsx'], bundle: true, minify: true, format: 'iife', write: false, jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }, target: ['es2020'], loader: { '.js': 'jsx' } })
const js = r.outputFiles[0].text.replace(/<\/script/gi, '<\\/script')
const css = fs.readFileSync('src/styles.css', 'utf8')
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#0D0F13">
<title>Gundy Command Center</title>
<meta name="description" content="Leads, call scripts, pipeline and money for the Gundy Consultations team, in one place.">
<link rel="canonical" href="https://team.gundyconsultations.com/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Gundy Consultations">
<meta property="og:title" content="Gundy Command Center">
<meta property="og:description" content="Leads, call scripts, pipeline and money for the Gundy team, in one place. Private, team only.">
<meta property="og:url" content="https://team.gundyconsultations.com/">
<meta property="og:image" content="https://team.gundyconsultations.com/og-image.jpg">
<meta property="og:image:secure_url" content="https://team.gundyconsultations.com/og-image.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Gundy Consultations Command Center team portal">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Gundy Command Center">
<meta name="twitter:description" content="Leads, call scripts, pipeline and money for the Gundy team, in one place.">
<meta name="twitter:image" content="https://team.gundyconsultations.com/og-image.jpg">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Gundy">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="format-detection" content="telephone=no">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>${css}</style>
</head>
<body>
<div id="root"></div>
<script>${js}</script>
</body>
</html>`
fs.rmSync('dist', { recursive: true, force: true }); fs.mkdirSync('dist', { recursive: true })
fs.writeFileSync('dist/index.html', html)
for (const f of fs.readdirSync('public')) fs.copyFileSync('public/' + f, 'dist/' + f)
console.log('Built dist/index.html', Math.round(html.length / 1024) + ' KB')
