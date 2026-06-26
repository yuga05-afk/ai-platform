# NeuralOps — AI Data Automation Platform
### Frontend Battle — IIT Bhubaneswar (WebnD) — Round 1

---

## Quick Start (Local Dev)

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview  # preview production build locally
```

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Custom CSS (CSS Variables) — no utility framework
- **Fonts**: JetBrains Mono (headers) + Inter (body) — as specified
- **Colors**: Exact palette from brief (Forsythia, Nocturnal Expedition, Arctic Powder, Mystic Mint, Deep Saffron, Oceanic Noir)
- **Deployment**: Vercel

---

## Features Implemented

### Feature 1 — Matrix-Driven Pricing & Currency Switcher
- Multi-dimensional config object (`PRICING_MATRIX`) with base tier rates
- 3 currencies: INR, USD, EUR with regional tariff variables
- 20% annual discount multiplier
- **State-isolated updates**: Only `<PriceNode>` re-renders on toggle — no parent reflow

### Feature 2 — Bento-to-Accordion with State Persistence
- Desktop: 3-column Bento Grid with hover expand
- Mobile (<768px): Fluid Accordion list
- **Context Lock**: On resize past breakpoint, active hover index is transferred to accordion state
- Zero external animation/component libraries (all native CSS transitions)

### Scoring Criteria Met
- ✅ Semantic HTML (`<main>`, `<header>`, `<section>`, `<article>`, `<blockquote>`, etc.)
- ✅ SEO meta tags + Open Graph + Twitter Card + JSON-LD
- ✅ Loading sequence <500ms
- ✅ Micro-interactions: 150–200ms ease-out
- ✅ Layout reflows: 300–400ms ease-in-out
- ✅ Responsive: mobile / tablet / desktop
- ✅ No banned libraries (Framer Motion, Radix, Shadcn, HeadlessUI)
- ✅ Hardware-accelerated animations (transform + opacity only)
- ✅ No hardcoded pricing values
- ✅ Exact color palette
- ✅ Exact fonts

---

## Deployment Guide (Vercel — simplest)

### Option A: One-Click via Vercel Dashboard (Recommended for beginners)
1. Push this repo to GitHub (instructions below)
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repo
5. Vercel auto-detects Vite — click **Deploy**
6. Done! You get a live URL in ~60 seconds

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Pushing to GitHub (Step-by-Step)

```bash
# 1. Create a new repo on github.com (click + → New repository)
# 2. Then in terminal:
cd ai-platform
git init
git add .
git commit -m "feat: initial build — NeuralOps landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
