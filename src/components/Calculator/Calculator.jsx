import React, { useEffect, useRef, useState } from "react";
import calulatorImg from "../../assets/images/icon/calculator.png";
import crossImg from "../../assets/images/icon/cross.png";

function Calculator({ text }) {
  const data = text.calculator;
  const daysInput = useRef();
  const peopleInput = useRef();
  const [toggleCalc, setToggleCalc] = useState(false);
  const [showText, setShowText] = useState(false);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  const handleToggleCalc = () => {
    setShowText(!showText);
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

  const handleShowText = () => {
    setShowText(!showText);
  };

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "€";
  };

  return (
    <section className="calc-container">
      <div
        className="calc-button"
        onClick={handleToggleCalc}
        onMouseEnter={toggleCalc ? () => 0 : handleShowText}
        onMouseLeave={toggleCalc ? () => 0 : handleShowText}
        style={{ width: showText ? "210px" : "" }}
      >
        <img
          src={toggleCalc ? crossImg : calulatorImg}
          width={"50px"}
          height={"50px"}
          alt="Icon calc"
        />
        <h4
          style={{ marginLeft: "15px", display: showText ? "block" : "none" }}
        >
          {data.buttonText}
        </h4>
      </div>
      <div
        className="calc-content"
        style={{ display: toggleCalc ? "block" : "none" }}
      >
        <h2>{data.title}</h2>
        <h5>{data.subtitle}</h5>
        <form>
          <label>
          {data.inputClients}
            <input
              type="number"
              name="days"
              placeholder="0"
              min="0"
              onChange={handleCalculation}
              ref={peopleInput}
            />
          </label>
          <label>
          {data.inputDays}
            <input
              type="number"
              name="people"
              max="7"
              min="0"
              placeholder="0"
              ref={daysInput}
              onChange={handleCalculation}
            />
          </label>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "red" }}>
            {error}
          </p>
        </form>
        <section className="result-container">
          <h3>{currencyFormat(result)} {data.saving}</h3>
        </section>
      </div>
    </section>
  );
}

export default Calculator;
