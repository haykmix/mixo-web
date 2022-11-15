import React, { useEffect, useRef, useState } from "react";
import calulatorImg from "../../assets/images/icon/calculator.png";

function Calculator() {
  const daysInput = useRef();
  const peopleInput = useRef();
  const [toggleCalc, setToggleCalc] = useState(false);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleToggleCalc = () => {
    setToggleCalc(!toggleCalc);
  };

  const handleCalculation = (e) => {
    let daysValue = daysInput.current.value;
    let peopleValue = peopleInput.current.value;

    if (daysValue > 0 && peopleValue > 0) {
      if (daysValue > 7) {
        setError("Days can't be bigger than 7");
        setResult(0);
        return 0;
      } else {
        let x = daysValue * peopleValue * 19.5;
        setResult(x);
        setError("");
      }
    } else {
      setResult(0);
    }
  };

  return (
    <section className="calc-container">
      <div className="calc-button" onClick={handleToggleCalc}>
        <img
          src={calulatorImg}
          width={"50px"}
          height={"50px"}
          alt="Icon calc"
        />
      </div>
      <div
        className="calc-content"
        style={{ display: toggleCalc ? "block" : "none" }}
      >
        <h2>CALCULADORA</h2>
        <h5>
          Con esta <span style={{ color: "#5600e1" }}>calculadora</span> puedes
          valorar el <span style={{ color: "#5600e1" }}>ahorro</span> en un año
          con Mixo
        </h5>
        <form>
          <label>
            Número promedio de clientes en una noche
            <input
              type="number"
              name="days"
              placeholder="100"
              min="0"
              onChange={handleCalculation}
              ref={peopleInput}
            />
          </label>
          <label>
            Número de días abiertos por semana
            <input
              type="number"
              name="people"
              max="7"
              min="0"
              placeholder="5"
              ref={daysInput}
              onChange={handleCalculation}
            />
          </label>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "red" }}>{error}</p>
        </form>
        <section className="result-container">
          <h3>{result}€ Ahorro</h3>
        </section>
      </div>
    </section>
  );
}

export default Calculator;
