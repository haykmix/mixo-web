import React, { useRef, useState } from "react";

function Calculator() {
  const clientInputRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [selectError, setSelectError] = useState(false);
  const [calculation, setCalculation] = useState("0");

  const handleCalculate = (e, number) => {
    let value = e?.target?.value ? e.target.value : e;
    console.log(value);
    if (value > 0) {
      let res = value * (number + 1) * 19.5;
      setCalculation(res);
      setSelectError(false);
    } else {
      setSelected(0);
      setCalculation("0");
      setSelectError(true);
    }
  };

  const renderDaysPicker = () => {
    return (
      <div className="progressContainer">
        <div className="lineProgress">
          <div
            className={selected ? "lineProgressActive" : "lineProgressDisabled"}
            style={{ width: `${selected * 133}px` }}
          ></div>
          {[...Array(7)].map((index, key) => {
            return (
              <span
                key={key}
                onClick={() => {
                  setSelected(key);
                  handleCalculate(clientInputRef.current.value, key);
                }}
                className={selected >= key ? "active" : "disabled"}
              >
                <section className="circleSection"></section>
                {key + 1}
              </span>
            );
          })}
        </div>
        {console.log(selectError)}
        <span className={selectError ? "error" : "selectEmptyError"}>
          *El campo 'clientes' debe de ser mayor que 0
        </span>
      </div>
    );
  };

  return (
    <section className="calculatorContainer">
      <div className="calcultaroWrapper">
        <div className="calcultaroTitle">
          <h1>CALCULADORA</h1>
          <h3>
            Con esta <span style={{ color: "#5600e1" }}>calculadora</span>{" "}
            puedes valorar el <span style={{ color: "#5600e1" }}>ahorro</span>{" "}
            en un año con Mixo
          </h3>
        </div>
        <form action="">
          <label htmlFor="">
            Número promedio de clientes en una noche
            <input
              type="number"
              placeholder="0"
              min="0"
              ref={clientInputRef}
              onChange={(e) => handleCalculate(e, selected)}
            />
          </label>
          <label htmlFor="">
            Número de días abiertos por semana
            {renderDaysPicker()}
            <input type="number" hidden readOnly value={selected + 1} />
          </label>
        </form>
        <div className="calculationValue">
          <h1>{calculation} €</h1>
          <h3>Ahorrados</h3>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
