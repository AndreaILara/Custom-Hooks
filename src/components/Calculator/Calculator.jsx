import React, { useRef, useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [operation, setOperation] = useState(null);
  const firstNumber = useRef(null);

  const handleInput = () => {
    const value = parseFloat(inputRef.current.value);
    inputRef.current.value = ""; // Limpiar input
    if (firstNumber.current === null) {
      firstNumber.current = value;
    } else if (operation && value !== null) {
      const computedResult = calculateResult(firstNumber.current, value, operation);
      firstNumber.current = null; // Reset para repetir el proceso
      setResult(computedResult);
      setHistory((prev) => [...prev, computedResult].sort((a, b) => a - b));
      setOperation(null); // Reset de operación
    }
  };

  const calculateResult = (num1, num2, op) => {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return "Operación no válida";
    }
  };

  const selectOperation = (op) => setOperation(op);

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <input ref={inputRef} type="number" placeholder="Introduce un número" />
      <div className="buttons">
        <button onClick={() => selectOperation("+")}>+</button>
        <button onClick={() => selectOperation("-")}>-</button>
        <button onClick={() => selectOperation("*")}>*</button>
        <button onClick={() => selectOperation("/")}>/</button>
        <button onClick={handleInput}>=</button>
      </div>
      {result !== null && <h3>Último resultado: {result}</h3>}
      {history.length > 0 && (
        <div className="history">
          <h3>Histórico de resultados:</h3>
          <ul>
            {history.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;
