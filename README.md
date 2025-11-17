# Undangan Digital - Next.js (starter)

This is a starter Next.js project (App Router) that serves **static HTML templates**
from `public/templates/*` and renders them dynamically based on a slug file at `/u/[slug]`.

## What’s included (Option D - Full System)
- package.json with Next.js, React (you can `npm install`)
- App Router with `app/u/[slug]/page.jsx` that loads template HTML and replaces placeholders
- `public/templates/brown/` and `public/templates/burgundy/` with example index.html + assets
- `data/orders.json` with example orders (`dimas-salsa`, `dika-tika`)
- Simple admin page `app/admin/page.jsx` to add a new order (stores to local file only when run server-side)
- README with instructions to run locally and deploy to Vercel

## How to run locally
1. Install node (recommended >= 18)
2. From project root:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000/u/dimas-salsa

## Deploy to Vercel
1. Push this repo to GitHub.
2. Create new project on Vercel and import the repository.
3. No build settings needed; Vercel will detect Next.js automatically.
