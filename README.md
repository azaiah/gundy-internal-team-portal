# Gundy Command Center (internal team portal)

Private portal for Azaiah and Bilal at Gundy Consultations: real contractor leads split by time zone, tap-to-call/text/email with custom scripts, a contact log on every lead, pipeline, tasks, idea board, money tracker, advisor with weekly close rate, playbook, research library and a built-in walkthrough guide.

## How it works
- **Front end:** React, bundled by `build.mjs` (esbuild) into one page at `dist/index.html`.
- **Back end:** one Netlify Function (`netlify/functions/api.mjs`) storing everything in **Netlify Blobs**. No outside database or account.
- **Live updates:** the page checks for changes every 4 seconds and only downloads what changed, so you see each other's calls, claims and notes almost immediately.
- **Sign-in:** one shared team password (entered once per device), then pick Azaiah or Bilal.
- **Weekly sweep:** every Monday, Claude finds new leads and posts them to `/api/ingest` with the `INGEST_KEY`. It can only add leads; it can't read or change anything else.

## Netlify setup (one time)
1. Netlify: **Add new project > Import an existing project > GitHub >** `azaiah/gundy-internal-team-portal`. Build settings come from `netlify.toml`.
2. **Project configuration > Environment variables**, add:
   - `TEAM_PASSWORD`: the shared password you and Bilal will use.
   - `INGEST_KEY`: a long random string for the weekly sweep (give the same value to Claude for the Monday task).
   - `ANTHROPIC_API_KEY` (optional): turns on "Get AI coaching" on the Advisor page.
3. Deploy. Open the site, sign in, pick your name, and on the Command center click **Load the first sweep** (262 leads with scripts). It only runs once and never overwrites anything.
4. Optional: a custom domain such as `team.gundyconsultations.com` (Domain management, then a CNAME at GoDaddy).

## Local development
```bash
npm install
npm run build          # writes dist/
npx netlify dev        # runs the site + functions locally (needs the Netlify CLI)
```

## Data model
Collections: `leads`, `scripts` (per-lead outreach kit, loaded on demand), `activity` (every touch), `tasks`, `board`, `finance`, `sweeps`, `settings`. Large collections are split into shards; every write uses an etag check and retries, so two people editing at once don't overwrite each other.

## Files
```
src/app.jsx                 the whole app (pages, lead card, contact log, money, advisor…)
src/store.js                talks to /api, polls for changes, applies edits instantly
src/guide.jsx               walkthrough tour (toggle in the sidebar)
src/content.js              playbook, research library, growth plan
src/styles.css              design tokens (dark and light), layout
netlify/functions/api.mjs   API: login, sync, writes, ingest, seed, AI coach
netlify/functions/seed-data.mjs   the first sweep (2026-10-22)
public/                     Gundy logo, favicon, robots.txt
```
