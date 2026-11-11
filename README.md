# webb_makerr — Build Your Digital Presence.

A premium, cinematic, single-page website for the **webb_makerr** creative web
development studio. Built with **Vite + React**, **React Three Fiber** (3D) and
**Framer Motion** (animation), and ready to deploy on **GitHub Pages**.

## ✨ Features

- Full-screen cinematic **video hero** with poster fallback + custom play/mute controls
- Interactive **3D foreground** (floating shapes, glowing orbs, particles, mouse parallax)
- Premium glassmorphism **navbar** with responsive mobile menu
- **Services**, **Portfolio** (live demo), **About**, **Why Choose** sections
- **Hero Video Manager**: local browser preview + explanation of the published video workflow
- **WhatsApp booking form** with validation → opens a prefilled WhatsApp chat
- **Instagram** integration across navbar, hero, contact and footer
- Fully **responsive** and accessible, with reduced-motion support

## 🚀 Run locally

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## 🌐 Deploy to GitHub Pages

The Vite `base` path is set to **`/webb-makerr/`** in `vite.config.js` (matches the
repository name). If you rename the repo, update `BASE_PATH` there.

### 1. Push the project

```bash
git init
git add .
git commit -m "Initial commit: webb_makerr website"
git branch -M main
git remote add origin https://github.com/<your-username>/webb-makerr.git
git push -u origin main
```

### 2. Enable GitHub Actions deployment

In the repository go to:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

The included workflow (`.github/workflows/deploy.yml`) will build and deploy the
site automatically on every push to `main`.

### 3. Your site will be live at

```
https://<your-username>.github.io/webb-makerr/
```

## 🎬 Adding the hero video

Drop a compressed `hero-video.mp4` into `public/assets/` and redeploy.
See [`public/assets/README.md`](public/assets/README.md) for details.
Without it, the site uses the branded poster fallback — nothing breaks.

## 📞 Contact

- WhatsApp: [+91 8709392077](https://wa.me/918709392077)
- Instagram: [@webb_makerr](https://www.instagram.com/webb_makerr/)
- Live demo: [demo](https://satyammishra67961-dot.github.io/demo-/)

---

© 2026 webb_makerr. All Rights Reserved.
