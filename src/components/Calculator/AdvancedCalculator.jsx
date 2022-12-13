import React, { useEffect, useRef, useState } from "react";
import bcrypt from "bcryptjs";
import styled from "styled-components";

function AdvancedCalculator() {
  const [logged, setLogged] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") ? localStorage.getItem("password") : ""
  );
  const [options, setOptions] = useState({
    totalRevenueBartender: 0,
    totalCostBartender: 0,
    totalRevenueMixo: 0,
    totalCostMixo: 0,
  });

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      setLogged(true);
      setLoginError(false);
    }
  });

  const [data, setData] = useState({
    operatingDays: "",
    operatingHours: "",
    serveRate: "",
    price: "",
  });

  const handelInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    // Revenue
    let valuesBartender = [46, data.operatingDays, data.operatingHours];
    let prodOHY = valuesBartender.reduce((a, n) => (a *= n), 1);
    let drinkSY = data.serveRate * prodOHY;
    let totalRev = drinkSY * data.price;

    setOptions((state) => ({
      ...state,
      totalRevenueBartender: numberWithCommas(totalRev),
    }));

    let valuesMixo = [52, data.operatingDays, data.operatingHours];
    let prodOHYMixo = valuesMixo.reduce((a, n) => (a *= n), 1);
    let drinkSYMixo = data.serveRate * prodOHYMixo;
    let totalRevMixo = drinkSYMixo * data.price;

    setOptions((state) => ({
      ...state,
      totalRevenueMixo: numberWithCommas(totalRevMixo),
    }));

    // Cost Bartender
    let valuesBartenderCost = [46, data.operatingDays, 6, 12.5];
    let prodOD = valuesBartenderCost.reduce((a, n) => (a *= n), 1);

    let valuesBartenderCleaningCost = [46, data.operatingDays, 2, 12.5];
    let prodOC = valuesBartenderCleaningCost.reduce((a, n) => (a *= n), 1);

    let personnelBartender = prodOD + prodOC;

    let totalBartenderCost = personnelBartender + 16391 + 6144 + 192;

    setOptions((state) => ({
      ...state,
      totalCostBartender: numberWithCommas(totalBartenderCost),
    }));

    // Cost Mixo

    let valuesMixoCost = [52, data.operatingDays, 0.25, 12.5];
    let prodODM = valuesMixoCost.reduce((a, n) => (a *= n), 1);

    let valuesMixoMachineCost = [52, data.operatingDays, 0.25, 12.5];
    let prodOCM = valuesMixoMachineCost.reduce((a, n) => (a *= n), 1);

    let personnelMixo = prodODM + prodOCM;

    let totalMixoCost = personnelMixo + 8614 + 10800 + 6945 + 49.92;

    setOptions((state) => ({
      ...state,
      totalCostMixo: numberWithCommas(totalMixoCost),
    }));

    console.log(options);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (logged) {
      setLogged(true);
      setLoginError(false);
    } else if (username === "martin" && password === "2598") {
      let hashedPassword = bcrypt.hashSync(
        password,
        "$2a$10$CwTycUXWue0Thq9StjUM0u"
      );
      localStorage.setItem("username", username);
      localStorage.setItem("password", hashedPassword);
      setUsername(username);
      setPassword(hashedPassword);
      setLogged(true);
      setLoginError(false);
    } else setLoginError(true);
  };

  return (
    <>
      {logged ? (
        <>
          <form action="" style={{ margin: "20px 0px 0px 20px" }}>
            <div className="d-flex" style={{ gap: "20px" }}>
              <section>
                <label htmlFor="">
                  <p>Operating days</p>
                  <InputField
                    type="number"
                    placeholder=""
                    name="operatingDays"
                    onChange={handelInputChange}
                  />
                </label>
              </section>
              <section>
                <label htmlFor="">
                  <p>Operating hours</p>
                  <InputField
                    type="number"
                    placeholder=""
                    name="operatingHours"
                    onChange={handelInputChange}
                  />
                </label>
              </section>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <section>
                <label htmlFor="">
                  <p>Serve rate</p>
                  <InputField
                    type="number"
                    placeholder=""
                    name="serveRate"
                    onChange={(event) => handelInputChange(event)}
                  />
                </label>
              </section>
              <section>
                <label htmlFor="">
                  <p>Price</p>
                  <InputField
                    type="number"
                    placeholder=""
                    name="price"
                    onChange={(event) => handelInputChange(event)}
                  />
                </label>
              </section>
            </div>
            <section>
              <SubmitButton onClick={handleCalculations}>
                Calculate
              </SubmitButton>
            </section>
          </form>

          <section style={{ padding: "20px" }}>
            <p> Total Revenue Bartender: {options.totalRevenueBartender} €</p>
            <p> Total Revenue Mixo: {options.totalRevenueMixo} €</p>
          </section>

          <section style={{ padding: "20px" }}>
            <p> Total Cost Bartender: {options.totalCostBartender} €</p>
            <p> Total Cost Mixo: {options.totalCostMixo} €</p>
          </section>
        </>
      ) : (
        <section>
          <form action="">
            <label htmlFor="">
              <InputField
                type="text"
                placeholder="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label htmlFor="">
              <InputField
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label htmlFor="">
              <SubmitButton onClick={handleLogin}>Submit</SubmitButton>
            </label>
            {loginError ? <p>Login error</p> : ""}
          </form>
        </section>
      )}
    </>
  );
}

const SubmitButton = styled.button`
  border: none;
  width: 100px;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;
`;

const InputField = styled.input`
  width: 300px;
  border-radius: 8px;
  padding: 10px;
`;

export default AdvancedCalculator;
