# Mustafa Ali Hakeemi — Personal Portfolio

A modern, high-contrast editorial portfolio website for **Mustafa Ali Hakeemi** (BS Robotics Student at The Islamia University of Bahawalpur), designed to match the minimalist, high-end editorial aesthetic featuring bold outlined display typography, clean pill badges, and a centered portrait cutout.

---

## 🌟 Key Highlights & Design Features

- **Exact Design Match**:
  - Atmospheric overcast sky wallpaper backdrop.
  - Floating rounded white card canvas (`border-radius: 28px`).
  - Top navigation bar with animated glowing status indicator (`● Available for New Project`), section count tags (e.g. `Work [5]`, `Publications [1]`), and pill action button (`Let's Talk ↗`).
  - Giant display typography banner: **MUSTAFA** (outlined text stroke) **HAKEEMI** (solid black).
  - Centered cutout portrait with overlapping depth.
  - Left info block with professional title (`Robotics & AI Engineer`), introduction, and CTA pill buttons.
  - Right vertical pill stack for LinkedIn, Google Scholar, Email, Phone, and Location.

- **How to Change the Profile Picture in Code**:
  Open [`index.html`](index.html#L104) and simply update the `src` attribute on the `<img>` tag to your image path:
  ```html
  <img 
    id="heroPortrait" 
    src="assets/your-photo.png" 
    alt="Mustafa Ali Hakeemi Portrait" 
    class="portrait-img"
  >
  ```
  Or place your image directly in the `assets/` folder and name it `mustafa-portrait.png`. The website will automatically display it with zero on-screen upload buttons!

- **Comprehensive Content Included (Accurate to Specifications)**:
  1. **Home / Hero**: Name, professional title, introduction, social links, contact CTA.
  2. **Metrics Strip**: Academic CGPA (3.1 / 4.0), 5+ Projects, 1 Peer-Reviewed Paper, BSO Presidency.
  3. **About Me**: Academic background, research pillars, language proficiencies (Urdu & English), nationality & location.
  4. **Education**: BS in Robotics at IUB, CGPA 3.1, duration, official website link, 8 coursework tags.
  5. **Featured Projects**:
     - **Final Year Project (FYP Spotlight)**: *AI-Based Autonomous Mobile Robot for GPS Navigation and Intelligent Object Detection* (detailed technical breakdown & 10 tech tags).
     - **Project 1**: *Emotion Detecting Robot* (Sept 2025).
     - **Project 2**: *Smart Driver Safety System* (May 2025).
     - **Project 3**: *IoT-Based Face Recognition Smart Door Access System*.
     - **Project 4**: *Diabetes Prediction Using Machine Learning* (March 2025).
  6. **Work Experience**: Python Programming Intern at *Algotix AI* (March 2026 – May 2026, Bahawalpur).
  7. **Technical Skills**: Programming, Robotics & Simulation, Computer Vision, Embedded Systems, Engineering & Control, Dev Tools & OS.
  8. **Research Interests & Career Goals**: 6 core pillars and Master's degree research objective.
  9. **Publications**: Published paper in *Spectrum of Engineering Sciences* with full author list, direct Google Scholar link, and one-click APA citation copy.
  10. **Certificates**: 3 verified certificates.
  11. **Leadership & Community**: President of *Baltikhar Student Organization (BSO)*.
  12. **Contact**: Email, phone, location, LinkedIn, Google Scholar, and working contact form.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or run a local server:

```powershell
cd "C:\Users\Syed Muhammad Saeed\.gemini\antigravity-ide\scratch\mustafa-portfolio"
python -m http.server 3000
```

Then visit:
👉 **`http://localhost:3000`** (or double-click `index.html`)

---

## 🌐 How to Deploy on Vercel

### Option 1: One-Click Terminal Deploy (Recommended)
Simply double-click [`deploy.bat`](deploy.bat) or run this command in PowerShell inside this directory:

```powershell
npx vercel --prod
```

1. Vercel will ask you to log in (press `Enter` and a browser tab will open for a 1-click free sign-up/login with GitHub or Email).
2. Follow the 3 quick prompts (press `Enter` to accept defaults: `Set up and deploy?` -> `Y`, `Link to existing project?` -> `N`, `Project name?` -> `mustafa-hakeemi-portfolio`).
3. Within 15 seconds, Vercel will provide your live URL (e.g. `https://mustafa-hakeemi-portfolio.vercel.app`) with free SSL/HTTPS!

### Option 2: Deploy via Vercel Web Dashboard (Drag & Drop or GitHub)
1. Go to [vercel.com](https://vercel.com) and create a free account.
2. Click **"Add New..."** > **"Project"**.
3. You can connect your GitHub account to import the repository, or install the Vercel CLI.
4. Your website will be automatically deployed with global edge caching and automatic SSL.

---

## 📁 File Structure

```text
mustafa-portfolio/
├── index.html                  # Semantic HTML5 portfolio
├── style.css                   # Complete design system & responsive layout
├── script.js                   # Interactive mobile navigation, clipboard & form handlers
├── vercel.json                 # Vercel deployment routing configuration
├── package.json                # Project manifest with deploy scripts
├── deploy.bat                  # One-click Windows deployment script
├── README.md                   # Project documentation
└── assets/
    ├── clouds-bg.jpg           # Soft monochrome overcast sky background
    ├── background remove.png   # Your customized transparent portrait
    ├── mustafa-profile.png     # Optimized profile copy
    └── mustafa-portrait.png    # High-resolution cutout
```

