import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";

import coverImage from "../../assets/images/cover/cover-back.png";

function AdvancedCalculator() {
  const { language, changeLanguage } = useContext(LanguageContext);
  let lang = localStorage.getItem("language");

  const handleSelectedLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  const [show, setShow] = useState("none");
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
    drinkDay: "",
    price: "",
    numberElements: "",
  });

  const handelInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const multiplicationFc = (arr) => {
    let res = arr.reduce((a, n) => (a *= n), 1);
    return res;
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    if (
      data.operatingDays === "" ||
      data.operatingHours === "" ||
      data.drinkDay === "" ||
      data.price === "" ||
      data.numberElements === ""
    ) {
      return 0;
    }

    let serveRate = data.drinkDay / data.operatingHours / data.numberElements;

    // Revenue Bartender
    let valuesBartender = [46, data.operatingDays, data.operatingHours];
    let prodOHY = valuesBartender.reduce((a, n) => (a *= n), 1);
    let drinkSY = serveRate * prodOHY;
    let totalRev = drinkSY * data.price;

    setOptions((state) => ({
      ...state,
      totalRevenueBartender: numberWithCommas(totalRev.toFixed(2)),
    }));

    // Revenue Mixo
    let valuesMixo = [52, data.operatingDays, data.operatingHours];
    let prodOHYMixo = valuesMixo.reduce((a, n) => (a *= n), 1);
    let marketingCost = prodOHYMixo * 5;
    let drinkSYMixo = serveRate * prodOHYMixo;
    let totalRevMixo = drinkSYMixo * data.price + marketingCost;

    setOptions((state) => ({
      ...state,
      totalRevenueMixo: numberWithCommas(totalRevMixo.toFixed(2)),
    }));

    // Cost Bartender
    let prodOD = multiplicationFc([46, data.operatingDays, 8, 12.5]);
    let prodOC = multiplicationFc([46, data.operatingDays, 2, 12.5]);
    let prodOA = multiplicationFc([drinkSY, 0.5, 0.05, 12]);
    let prodOS = multiplicationFc([drinkSY, 0.5, 0.23, 2.6]);
    let prodOI = multiplicationFc([drinkSY, 0.18, 0.6]);

    let totalBartenderCost =
      prodOD + prodOC + prodOA + prodOS + prodOI + 3511 + 192;

    setOptions((state) => ({
      ...state,
      totalCostBartender: numberWithCommas(totalBartenderCost.toFixed(2)),
    }));

    // Cost Mixo
    let prodODM = multiplicationFc([52, data.operatingDays, 0.25, 12.5]);
    let prodOCM = multiplicationFc([52, data.operatingDays, 0.25, 12.5]);
    let prodOAM = multiplicationFc([drinkSYMixo, 0.5, 0.05, 12]);
    let prodOSM = multiplicationFc([drinkSYMixo, 0.5, 0.038, 1.5]);

    let totalMixoCost =
      prodODM + prodOCM + prodOAM + prodOSM + 10800 + 3969 + 49.92;

    setOptions((state) => ({
      ...state,
      totalCostMixo: numberWithCommas(totalMixoCost.toFixed(2)),
    }));

    let netIncomeB = (totalRev - totalBartenderCost) * data.numberElements;
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

    setShow("flex");
  };

  return (
    <>
      <Container>
        <SectionTitle>
          <Title>{language.advancedCalc.title}</Title>
        </SectionTitle>
        <SectionForm>
          <Select
            name="lang"
            id="lang"
            defaultValue={lang}
            onChange={handleSelectedLanguage}
          >
            <option value="es">🇪🇸ES</option>
            <option value="en">🇬🇧EN</option>
          </Select>
          <FormComponent action="">
            <FormWrapper>
              <InputWrapper>
                <InputElement>
                  <LabelContent htmlFor="">
                    <h4>{language.advancedCalc.inputs.days}</h4>
                    <InputField
                      type="number"
                      placeholder=""
                      name="operatingDays"
                      onChange={handelInputChange}
                    />
                    <InputResume>
                      {language.advancedCalc.labels.days}
                    </InputResume>
                  </LabelContent>
                </InputElement>
                <InputElement>
                  <LabelContent htmlFor="">
                    <h4>{language.advancedCalc.inputs.hours}</h4>
                    <InputField
                      type="number"
                      placeholder=""
                      name="operatingHours"
                      onChange={handelInputChange}
                    />
                    <InputResume>
                      {language.advancedCalc.labels.hours}
                    </InputResume>
                  </LabelContent>
                </InputElement>
                <InputElement>
                  <LabelContent htmlFor="">
                    <h4>{language.advancedCalc.inputs.price}</h4>
                    <InputField
                      type="number"
                      placeholder=""
                      name="price"
                      onChange={(event) => handelInputChange(event)}
                    />
                    <InputResume>
                      {language.advancedCalc.labels.price}
                    </InputResume>
                  </LabelContent>
                </InputElement>
              </InputWrapper>
              <InputWrapper>
                <InputElement>
                  <LabelContent htmlFor="">
                    <h4>{language.advancedCalc.inputs.served}</h4>

                    <InputField
                      type="number"
                      placeholder=""
                      name="drinkDay"
                      onChange={(event) => handelInputChange(event)}
                    />
                    <InputResume>
                      {language.advancedCalc.labels.served}
                    </InputResume>
                  </LabelContent>
                </InputElement>
                <InputElement>
                  <LabelContent htmlFor="">
                    <h4>{language.advancedCalc.inputs.bartender}</h4>
                    <InputField
                      type="number"
                      placeholder=""
                      name="numberElements"
                      onChange={(event) => handelInputChange(event)}
                    />
                    <InputResume>
                      {language.advancedCalc.labels.bartender}
                    </InputResume>
                  </LabelContent>
                </InputElement>
                <InputElement>
                  <SubmitButton onClick={handleCalculations}>
                    {language.advancedCalc.button}
                  </SubmitButton>
                </InputElement>
              </InputWrapper>
            </FormWrapper>
          </FormComponent>

          <SectionData display={show}>
            <DataWrapper>
              <DataSection>
                <h3>{language.advancedCalc.results.totalIncome}</h3>
                <h5>{language.advancedCalc.year}</h5>

                <DataElement>
                  <DataTitle>Bartender</DataTitle>
                  <DataText>{options.totalRevenueBartender} €</DataText>
                </DataElement>

                <DataElement>
                  <DataTitle>Mixo</DataTitle>
                  <DataText>{options.totalRevenueMixo} €</DataText>
                </DataElement>
              </DataSection>

              <DataSection>
                <h3>{language.advancedCalc.results.totalCost}</h3>
                <h5>{language.advancedCalc.year}</h5>

                <DataElement>
                  <DataTitle>Bartender</DataTitle>
                  <DataText>{options.totalCostBartender} €</DataText>
                </DataElement>

                <DataElement>
                  <DataTitle>Mixo</DataTitle>
                  <DataText>{options.totalCostMixo} €</DataText>
                </DataElement>
              </DataSection>

              <DataSection>
                <h3>{language.advancedCalc.results.netIncome}</h3>
                <h5>{language.advancedCalc.year}</h5>

                <DataElement>
                  <DataTitle>Bartender</DataTitle>
                  <DataText>{options.netIncomeB} €</DataText>
                </DataElement>

                <DataElement>
                  <DataTitle>Mixo</DataTitle>
                  <DataText>{options.netIncomeM} €</DataText>
                </DataElement>
              </DataSection>
            </DataWrapper>
          </SectionData>

          <SectionDataResult display={show}>
            <DataElement>
              <DataTitle>Total {language.advancedCalc.year}</DataTitle>
              <DataText
                style={{
                  backgroundColor: "#60ff60",
                  padding: " 5px",
                  borderRadius: "5px",
                  width: "fit-content",
                  color: "black",
                }}
              >
                {options.netIncome} €
              </DataText>
            </DataElement>

            <DataElement>
              <DataTitle>{language.advancedCalc.results.percentage}</DataTitle>
              <DataText
                style={{
                  backgroundColor: "#60ff60",
                  padding: " 5px",
                  borderRadius: "5px",
                  width: "fit-content",
                  color: "black",
                }}
              >
                {options.netIncomePercent}%
              </DataText>
            </DataElement>
          </SectionDataResult>
        </SectionForm>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
`;

const SectionTitle = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${coverImage});
  background-size: 750px;
  width: 35%;
`;

const SectionForm = styled.section`
  width: 65%;
  height: 100vh;
  align-items: center;
  padding-top: 30px;
`;

const SectionData = styled.section`
  margin-left: 40px;
  display: ${(props) => props.display};
`;

const SectionDataResult = styled.section`
  margin-left: 60px;
  display: ${(props) => props.display};
  gap: 50px;
`;

const Title = styled.h3`
  color: #fff;
  padding: 10%;
  line-height: 50px;
`;

const Select = styled.select`
  border: none;
  position: absolute;
  right: 40px;
`;

const FormComponent = styled.form`
  margin: 40px 0px 0px 20px;
  width: 40%;
`;

const FormWrapper = styled.div`
  gap: 20px;
  flex-direction: column;
`;

const InputWrapper = styled.span`
  display: flex;
`;

const InputField = styled.input`
  width: 200px;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
`;

const InputElement = styled.section``;

const InputResume = styled.p`
  font-size: 13px;
  margin-top: 10px;
  line-height: 20px;
`;

const SubmitButton = styled.button`
  border: none;
  width: 200px;
  margin-top: 34px;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;
  margin-left: 40px;
  background-color: #4242fb;
  color: #fff;
`;

const DataWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 60px;
`;

const DataSection = styled.section`
  padding: 20px;
  margin: 40px 20px 0px 0px;
`;

const DataElement = styled.section`
  margin-top: 20px;
`;

const DataTitle = styled.h5`
  color: #4242fb;
`;

const DataText = styled.p`
  font-weight: 800;
  margin-top: 10px;
`;

const LabelContent = styled.label`
  width: 260px;
  margin-left: 40px;
`;

export default AdvancedCalculator;
