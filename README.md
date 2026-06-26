# NeuralOps - AI Data Automation Platform

A premium, high-converting, responsive landing page for an advanced AI-driven data automation platform. Built with React, Vite, and custom CSS.

## 🚀 Features

- **Animated Particle Background** - Interactive canvas-based particle system with gradient orbs
- **Hero Section** - Eye-catching hero with stats, demo button, and feature strip
- **Bento-to-Accordion Features** - Responsive feature showcase that transforms from grid to accordion on mobile
- **Dynamic Pricing Matrix** - Multi-currency pricing with isolated state updates (USD, INR, EUR)
- **Social Proof** - Testimonials, stats, and partner logos
- **Feature Pages** - Individual pages for each feature with tabs and metrics
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Semantic HTML, meta tags, and Open Graph support
- **Smooth Animations** - CSS transitions and animations with reduced motion support

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Custom CSS** - No external CSS frameworks
- **Canvas API** - For animated background
- **GitHub Actions** - CI/CD for automated deployment

## 📦 Project Structure

```
ai-platform/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
├── src/
│   ├── components/
│   │   ├── AnimatedBackdrop.jsx  # Particle animation background
│   │   ├── BentoAccordion.jsx    # Feature grid/accordion
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Hero.jsx              # Hero section
│   │   ├── Icons.jsx             # SVG icons
│   │   ├── Loader.jsx            # Loading screen
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Pricing.jsx           # Pricing section
│   │   └── SocialProof.jsx       # Testimonials section
│   ├── data/
│   │   └── features.js           # Feature data and configuration
│   ├── pages/
│   │   ├── FeaturePage.jsx       # Individual feature pages
│   │   └── Home.jsx              # Homepage
│   ├── styles/
│   │   └── global.css            # Global styles and CSS variables
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── index.html                    # HTML template with SEO meta tags
├── vite.config.js                # Vite configuration
├── vercel.json                   # Vercel deployment config
└── package.json                  # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Forsythia** (#ffc801) - Primary accent
- **Deep Saffron** (#ff9932) - Secondary accent
- **Arctic Powder** (#f1f6f4) - Light text/backgrounds
- **Mystic Mint** (#d9e8e2) - Secondary text
- **Nocturnal** (#114c5a) - Teal accent
- **Ink** (#050606) - Dark background

### Typography
- **Inter** - Primary font for headings and body text
- **JetBrains Mono** - Monospace font for code and terminal elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yuga05-afk/ai-platform.git
   cd ai-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Step-by-Step GitHub Deployment Guide

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `ai-platform`
4. Description: "NeuralOps - AI Data Automation Platform"
5. Select **Public**
6. Check **Add a README file** (optional, we already have one)
7. Click **Create repository**

### Step 2: Push Your Code to GitHub

Open your terminal/command prompt and run these commands:

```bash
# Navigate to your project folder
cd c:/Users/Lenovo/Desktop/ai-platform

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit: NeuralOps landing page with all features"

# Add your GitHub repository as remote
git remote add origin https://github.com/yuga05-afk/ai-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If you get an authentication error, you may need to:
- Use a Personal Access Token (PAT) as your password
- Or set up SSH keys for authentication

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/yuga05-afk/ai-platform`
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at:
   ```
   https://yuga05-afk.github.io/ai-platform/
   ```

### Step 5: Verify Deployment

1. Visit your live site: `https://yuga05-afk.github.io/ai-platform/`
2. Test all features:
   - Click through navigation
   - Test pricing currency switcher
   - Resize browser to test responsive design
   - Click on feature cards
   - Test mobile menu

## 🔄 Making Updates

When you make changes to your code:

```bash
# Add changed files
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Actions will automatically rebuild and deploy your site!

## 🎯 Key Features Explained

### 1. Animated Background
- Canvas-based particle system
- Gradient orbs that move smoothly
- Connecting lines between nearby particles
- Performance optimized with requestAnimationFrame

### 2. Bento-to-Accordion
- Desktop: 3-column grid layout
- Mobile: Accordion-style expandable panels
- State persistence when resizing
- Smooth transitions between views

### 3. Pricing Matrix
- Dynamic price calculation using configuration matrix
- 20% discount for annual billing
- Multi-currency support (USD, INR, EUR)
- Isolated state updates (no parent re-renders)

### 4. Feature Pages
- Individual pages for each feature
- Tabbed interface (Overview, Metrics, Use Cases)
- Breadcrumb navigation
- Related features section

## 🎨 Customization Guide

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --forsythia: #ffc801;  /* Primary accent color */
  --deep-saffron: #ff9932;  /* Secondary accent */
  /* ... other colors */
}
```

### Add New Features
Edit `src/data/features.js`:
```javascript
{
  slug: 'your-feature',
  title: 'Your Feature',
  tag: 'CATEGORY',
  icon: YourIcon,
  accent: 'yellow',  // or 'orange' or 'teal'
  summary: 'Brief description',
  detail: 'Detailed description',
  metrics: ['Metric 1', 'Metric 2']
}
```

### Modify Pricing
Edit `src/components/Pricing.jsx`:
```javascript
const PRICING_MATRIX = {
  tiers: {
    starter: { base_usd: 29 },
    // Add/modify tiers
  },
  annual_discount: 0.8,  // 20% off
  currency_tariffs: {
    USD: { symbol: '$', rate: 1, locale: 'en-US' },
    // Add currencies
  },
}
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Shows 404
- Check that GitHub Pages is set to "GitHub Actions" in Settings
- Verify the workflow completed successfully in Actions tab
- Ensure `vite.config.js` has correct `base` path

### Styles Not Loading
- Verify the `base` path in `vite.config.js` matches your repository name
- Rebuild and push changes

## 📊 Performance Optimization

- **Lazy Loading** - Components load on demand
- **Code Splitting** - Vendor chunks separated
- **CSS Animations** - Hardware-accelerated transforms
- **Canvas Optimization** - Efficient particle rendering
- **Reduced Motion** - Respects user preferences

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Reduced motion support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Competition Requirements Met

✅ **React Framework** - Built with React 18
✅ **Custom CSS** - No external CSS frameworks
✅ **Responsive Design** - Mobile-first approach
✅ **SEO Optimized** - Meta tags, OG tags, semantic HTML
✅ **GitHub Repository** - Public repo with all code
✅ **Live Deployment** - GitHub Pages
✅ **No External UI Libraries** - All components built from scratch
✅ **State Isolation** - Pricing updates don't trigger global re-renders
✅ **Bento-to-Accordion** - Responsive feature showcase
✅ **Multi-Currency Pricing** - Dynamic calculation with matrix
✅ **Animations** - Smooth transitions and micro-interactions
✅ **Performance** - Optimized for fast loading

## 📄 License

This project is created for the WebnD Frontend Battle competition.

## 👨‍💻 Author

Built with ❤️ for the WebnD IIT Bhubaneswar Frontend Battle

---

**Live Site:** https://yuga05-afk.github.io/ai-platform/
**Repository:** https://github.com/yuga05-afk/ai-platform
