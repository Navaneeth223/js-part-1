# React Portfolio Project (GSAP + Three.js)
**A handcrafted, non-AI-looking developer portfolio**

---

## 🧠 Project Philosophy
- Subtle motion > flashy animation
- One meaningful 3D element
- Performance-first
- Human-crafted interaction (GSAP timelines + inertia)
- Clean React structure

---

## 🛠 Tech Stack
- React (Vite)
- GSAP + ScrollTrigger
- Three.js
- CSS (no heavy UI libraries)

---

## ✅ Requirements
- **Node.js:** 20.19+ or **22.12+**
- **npm:** latest

Check:
```bash
node -v
npm -v

npm create vite@latest react-portfolio
cd react-portfolio
npm install
npm install gsap three
npm run dev


src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ ThreeBackground.jsx
 │   ├─ About.jsx
 │   ├─ Skills.jsx
 │   ├─ Projects.jsx
 │   └─ Contact.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
