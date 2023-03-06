import "./App.scss";
import Button from "./components/Button";
import React, { useState, useEffect } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [input, setInput] = useState({ value: "" });
  const [result, setResult] = useState(0);

  function cleanAll() {
    setExpression("");
    setResult(0);
  }

  function equal() {
    const x = eval(expression);
    setResult(x);
    setExpression(expression + input.value);
  }

  function afterEqual() {
    if (
      input.value != "+" &&
      input.value != "-" &&
      input.value != "/" &&
      input.value != "*"
    ) {
      setExpression(input.value);
      setResult(0);
    } else {
      setExpression(result + input.value);
    }
  }

  function dubbleDut() {
    if (input.value === ".") {
      setInput({ value: "" });
    } else {
      setExpression(expression + input.value);
    }
  }

  function operatorsSolve() {
    if (input.value === "+" || input.value === "*" || input.value === "/") {
      setExpression(expression.slice(0, expression.length - 1) + input.value);
    } else {
      setExpression(expression + input.value);
    }
  }

  useEffect(() => {
    console.log("DIO");
    if (input.value === "AC") {
      console.log("DIO1");
      cleanAll();
    } else if (input.value === "=") {
      console.log("DIO2");
      equal();
    } else if (expression[expression.length - 1] === "=") {
      console.log("DIO3");
      afterEqual();
    } else if (expression[expression.length - 1] === ".") {
      console.log("DIO4");
      dubbleDut();
    } else if (
      expression[expression.length - 1] === "+" ||
      expression[expression.length - 1] === "-" ||
      expression[expression.length - 1] === "*" ||
      expression[expression.length - 1] === "/"
    ) {
      console.log("DIO5");
      operatorsSolve();
    } else if (/^.*[\/\+*\-]0$/gm.test(expression)) {
      console.log("DIO6");
      setExpression(expression.slice(0, -1) + input.value);
    } else {
      console.log("DIO7");
      setExpression(expression + input.value);
    }
  }, [input]);

  const array = [
    { id: "clear", class: "red-clear", text: "AC" },
    { id: "divide", class: "operators", text: "/" },
    { id: "multiply", class: "operators", text: "*" },
    { id: "seven", class: "numbers", text: "7" },
    { id: "eight", class: "numbers", text: "8" },
    { id: "nine", class: "numbers", text: "9" },
    { id: "subtract", class: "operators", text: "-" },
    { id: "four", class: "numbers", text: "4" },
    { id: "five", class: "numbers", text: "5" },
    { id: "six", class: "numbers", text: "6" },
    { id: "add", class: "operators", text: "+" },
    { id: "one", class: "numbers", text: "1" },
    { id: "two", class: "numbers", text: "2" },
    { id: "three", class: "numbers", text: "3" },
    { id: "equals", class: "blue-equal", text: "=" },
    { id: "zero", class: "numbers", text: "0" },
    { id: "decimal", class: "numbers", text: "." },
  ];

  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="display-expression">{expression}</div>
        <div className="display-result" id="display">
          {result}
        </div>
        <div className="buttons-grid">
          {array.map((elem, i) => (
            <Button
              key={i}
              id={elem.id}
              class={elem.class}
              text={elem.text}
              setInput={setInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
