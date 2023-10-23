import React, { useEffect, useRef, useState } from "react";
import calculatorImg from "../../assets/images/icon/calculator.png";
import crossImg from "../../assets/images/icon/cross.png";

function Calculator({ text }) {
  const data = text.calculator;
  const daysInput = useRef();
  const priceInput = useRef();
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
    let priceValue = priceInput.current.value;
    let factMonth, res;

    const constantValue = 100;

    if (daysValue > 0 && priceValue > 0) {
      factMonth = daysValue * constantValue * priceValue;
      res = factMonth * 12;
      setResult(res);
      setError("");
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
        className={showText ? "calc-button" : "calc-button calc-button-open"}
        onClick={handleToggleCalc}
        onMouseEnter={toggleCalc ? () => 0 : handleShowText}
        onMouseLeave={toggleCalc ? () => 0 : handleShowText}
      >
        <img
          src={toggleCalc ? crossImg : calculatorImg}
          width={"50px"}
          height={"50px"}
          alt="Icon calc"
        />
        <h5
          style={{
            marginLeft: "15px",
            display: showText ? "block" : "none",
            color: "#000",
          }}
        >
          {data.buttonText}
        </h5>
      </div>
      <div
        className="calc-content"
        style={{ display: toggleCalc ? "block" : "none" }}
      >
        <h2>{data.title}</h2>
        <h5 style={{ color: "#000" }}>{data.subtitle}</h5>
        <form>
          <label>
            <p style={{ color: "#000" }}>{data.inputDays}</p>
            <input
              type="number"
              name="days"
              placeholder="0"
              min="0"
              onChange={handleCalculation}
              ref={priceInput}
            />
          </label>
          <label>
            <p style={{ color: "#000" }}>{data.inputPrice}</p>
            <input
              type="number"
              name="price"
              max="100"
              min="1"
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
          <h4 style={{color: '#000'}}>
            {currencyFormat(result)} {data.saving}
          </h4>
        </section>
      </div>
    </section>
  );
}

export default Calculator;
