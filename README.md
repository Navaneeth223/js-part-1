just add some JS project to creating for educational purpose only
how to sdfs


new style 



# 📐 Simple Calculus Calculator – React App

A beginner‑friendly React application that demonstrates **basic calculus concepts** using simple input and real‑time calculations.

---

## ✨ Features

- Input a value of **x**
- Calculates:
  - **f(x) = x²**
  - **Derivative:** f′(x) = 2x
  - **Integral:** ∫x² dx = x³ / 3 (constant ignored)
- Clean UI with minimal CSS
- Perfect for learning React + Math basics

---

## 🧠 Math Logic

| Concept | Formula |
|------|--------|
| Function | f(x) = x² |
| Derivative | f′(x) = 2x |
| Integral | ∫x² dx = x³ / 3 |

---

## 📁 File Structure

```
src/
 ├── App.jsx
 ├── App.cs      (logic reference only)
 ├── index.css
 └── main.jsx
```

---

## ⚛️ App.jsx

```jsx
import { useState } from "react";
import "./index.css";

export default function App() {
  const [x, setX] = useState(0);

  const fx = x * x;
  const derivative = 2 * x;
  const integral = (x ** 3) / 3;

  return (
    <div className="app">
      <h1>📐 Simple Calculus Calculator</h1>

      <div className="card">
        <label>Enter value of x</label>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />

        <div className="results">
          <p><strong>f(x) = x² :</strong> {fx}</p>
          <p><strong>Derivative f'(x) :</strong> {derivative}</p>
          <p><strong>Integral ∫x² dx :</strong> {integral}</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 🧩 App.cs (Logic Reference Only)

```csharp
// Not used in React – for math understanding only

public double f(double x) => x * x;
public double derivative(double x) => 2 * x;
public double integral(double x) => (x * x * x) / 3;
```

---

## 🎨 index.css

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  border-radius: 12px;
  width: 300px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
}

.results {
  margin-top: 15px;
}
```

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

---

## 🔥 Next Improvements

- Add **limits calculator**
- Add **graph plotting**
- Add **multiple functions selector**
- Convert to **math learning mini‑site**

---

Made with ❤️ using React
