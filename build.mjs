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
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
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
