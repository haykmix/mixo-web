import React, { useState } from "react";
import styled from "styled-components";

function AdvancedCalculator() {
  const [options, setOptions] = useState({
    totalRevenueBartender: 0,
    totalCostBartender: 0,
    totalRevenueMixo: 0,
    totalCostMixo: 0,
    netIncomeB: 0,
    netIncomeM: 0,
    netIncome: 0,
    netIncomePercent: 0,
  });

  const [data, setData] = useState({
    operatingDays: "",
    operatingHours: "",
    serveRate: "",
    price: "",
    numberElements: "",
  });

  const handelInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    // Revenue Bartender
    let valuesBartender = [46, data.operatingDays, data.operatingHours];
    let prodOHY = valuesBartender.reduce((a, n) => (a *= n), 1);
    let drinkSY = data.serveRate * prodOHY;
    let totalRev = drinkSY * data.price;

    setOptions((state) => ({
      ...state,
      totalRevenueBartender: numberWithCommas(totalRev),
    }));

    // Revenue Mixo
    let valuesMixo = [52, data.operatingDays, data.operatingHours];
    let prodOHYMixo = valuesMixo.reduce((a, n) => (a *= n), 1);
    let marketingCost = prodOHYMixo * 5;
    let drinkSYMixo = data.serveRate * prodOHYMixo;
    let totalRevMixo = drinkSYMixo * data.price + marketingCost;

    setOptions((state) => ({
      ...state,
      totalRevenueMixo: numberWithCommas(totalRevMixo),
    }));

    // Cost Bartender
    let valuesBartenderCost = [46, data.operatingDays, 8, 12.5];
    let prodOD = valuesBartenderCost.reduce((a, n) => (a *= n), 1);

    let valuesBartenderCleaningCost = [46, data.operatingDays, 2, 12.5];
    let prodOC = valuesBartenderCleaningCost.reduce((a, n) => (a *= n), 1);

    let personnelBartender = prodOD + prodOC;

    let totalBartenderCost = personnelBartender + 15611 + 3511 + 192;

    setOptions((state) => ({
      ...state,
      totalCostBartender: numberWithCommas(totalBartenderCost),
    }));

    // Cost Mixo
    let valuesMixoCost = [52, data.operatingDays, 0.25, 12.5];
    let prodODM = valuesMixoCost.reduce((a, n) => (a *= n), 1);

    console.log(prodODM);

    let valuesMixoMachineCost = [52, data.operatingDays, 0.25, 12.5];
    let prodOCM = valuesMixoMachineCost.reduce((a, n) => (a *= n), 1);

    console.log(prodOCM);

    let personnelMixo = prodODM + prodOCM;

    console.log(personnelMixo);

    let totalMixoCost = personnelMixo + 8204 + 10800 + 3969 + 49.92;

    setOptions((state) => ({
      ...state,
      totalCostMixo: numberWithCommas(totalMixoCost),
    }));

    // Net income Bartender
    let netIncomeB = (totalRev - totalBartenderCost) * data.numberElements;

    // Net income Mixo
    let netIncomeM = (totalRevMixo - totalMixoCost) * data.numberElements;

    let netIncome = netIncomeM - netIncomeB;
    let netIncomePercent = netIncome / netIncomeB;

    setOptions((state) => ({
      ...state,
      netIncomeB: numberWithCommas(netIncomeB.toFixed(2)),
      netIncomeM: numberWithCommas(netIncomeM.toFixed(2)),
      netIncome: numberWithCommas(netIncome.toFixed(2)),
      netIncomePercent: numberWithCommas(netIncomePercent.toFixed(2) * 100),
    }));
  };

  return (
    <>
      <Container>
        <Title>
          Con esta calculadora se puede valorar el ahorro en un año con 1 unidad
          MIXO en vez de una barra tradicional de 1 bartender.
        </Title>
        <Wrapper>
          <form action="" style={{ margin: "20px 0px 0px 20px", width: "40%" }}>
            <div
              className="d-flex"
              style={{ gap: "20px", flexDirection: "column" }}
            >
              <span style={{ display: "flex" }}>
                <section style={{}}>
                  <LabelContent htmlFor="">
                    <h5>Días operando</h5>
                    <p>Cantidad de días a la semana que se utiliza la barra</p>
                    <InputField
                      type="number"
                      placeholder=""
                      name="operatingDays"
                      onChange={handelInputChange}
                    />
                  </LabelContent>
                </section>
                <section>
                  <LabelContent htmlFor="">
                    <h5>Horas operando</h5>
                    <p>Horas al día que está en funcionamiento la barra</p>
                    <InputField
                      type="number"
                      placeholder=""
                      name="operatingHours"
                      onChange={handelInputChange}
                    />
                  </LabelContent>
                </section>
              </span>
              <span style={{ display: "flex" }}>
                <section>
                  <LabelContent htmlFor="">
                    <h5>Precio</h5>
                    <p>Precio promedio del combinado</p>
                    <InputField
                      type="number"
                      placeholder=""
                      name="price"
                      onChange={(event) => handelInputChange(event)}
                    />
                  </LabelContent>
                </section>
                <section>
                  <LabelContent htmlFor="">
                    <h5>Promedio servico</h5>
                    <p>
                      Promedio de combinados que 1 bartender sirve en 1 hora
                    </p>
                    <InputField
                      type="number"
                      placeholder=""
                      name="serveRate"
                      onChange={(event) => handelInputChange(event)}
                    />
                  </LabelContent>
                </section>
              </span>

              <section>
                <LabelContent htmlFor="">
                  <h5>Número de camareros</h5>
                  <p>Número de camareros durante 1 día</p>
                  <InputField
                    type="number"
                    placeholder=""
                    name="numberElements"
                    onChange={(event) => handelInputChange(event)}
                  />
                </LabelContent>
              </section>
            </div>
            <section style={{ margin: "20px 0px" }}>
              <SubmitButton onClick={handleCalculations}>Calcular</SubmitButton>
            </section>
          </form>

          <section style={{ display: "flex" }}>
            <section style={{ padding: "20px" }}>
              <h3>Ingreso total</h3>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Bartender</h5>
                <p>{options.totalRevenueBartender} €</p>
              </section>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Mixo</h5>
                {options.totalRevenueMixo} €
              </section>
            </section>

            <section style={{ padding: "20px" }}>
              <h3>Coste total</h3>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Bartender</h5>
                <p>{options.totalCostBartender} €</p>
              </section>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Mixo</h5>
                {options.totalCostMixo} €
              </section>
            </section>

            <section style={{ padding: "20px" }}>
              <h3>Ingreso neto</h3>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Bartender</h5>
                <p>{options.netIncomeB} €</p>
              </section>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Mixo</h5>
                {options.netIncomeM} €
              </section>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Total</h5>
                {options.netIncome} €
              </section>

              <section style={{ marginTop: "20px" }}>
                <h5 style={{ color: "#4242fb" }}>Porcentage</h5>
                {options.netIncomePercent} %
              </section>
            </section>
          </section>
        </Wrapper>
      </Container>
    </>
  );
}

const SubmitButton = styled.button`
  border: none;
  width: 100px;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;
  margin-left: 40px;
  background-color: #4242fb;
  color: #fff;
`;

const InputField = styled.input`
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h3`
  padding: 2% 20%;
  width: 100%;
  background-color: #4242fb;
  height: fit-content;
  border-radius: 0px 0px 10px 0px;
  color: white;
  text-align: center;
`;

const LabelContent = styled.label`
  width: 260px;
  margin-left: 40px;
`;

export default AdvancedCalculator;
