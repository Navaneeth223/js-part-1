// function App() {
//   return (
//     <div>
//     <h1>Hello Vite + React!</h1>
      
//     </div>
//   )
// }

// export default App

// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.


// ----- 2nd question below -------
// Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.

// Data:

// const items = ['pen', 'pencil', 'ruler', 'eras

// App.jsx
import { useState } from "react";
import "./index.css";

export default function App() {
  const [x, setX] = useState(0);

  // Simple calculus examples
  const fx = x * x;           // f(x) = x²
  const derivative = 2 * x;   // f'(x) = 2x
  const integral = (x ** 3) / 3; // ∫x² dx = x³/3 (constant ignored)

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

      <footer>Made with React ⚛️</footer>
    </div>
  );
}


// App.cs (logic explanation file – NOT required for React build)
// This file is just to show the math logic in a C#-style format
// public double f(double x) => x * x;
// public double derivative(double x) => 2 * x;
// public double integral(double x) => (x * x * x) / 3;


/* index.css */
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
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
}

.results {
  margin-top: 15px;
}

.results p {
  margin: 6px 0;
}

footer {
  margin-top: 20px;
  font-size: 12px;
  opacity: 0.8;
}
