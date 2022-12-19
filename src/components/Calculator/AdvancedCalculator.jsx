import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/LanguageContext";
import { ColorRing } from "react-loader-spinner";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import coverImage from "../../assets/images/cover/cover-back.png";

function AdvancedCalculator() {
  const { language, changeLanguage } = useContext(LanguageContext);
  let lang = localStorage.getItem("language");

  const [show, setShow] = useState("none");
  const [loading, setLoading] = useState("none");
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

  const handleSelectedLanguage = (e) => {
    changeLanguage(e.target.value);
    if (e.target.value !== "es") return 0;
  };

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

    let servingRate = data.drinkDay / data.operatingHours / data.numberElements;
    let servingRateTotal = servingRate * data.numberElements;

    // Revenue Bartender
    let OperatingHoursData = [46, data.operatingDays, data.operatingHours];
    let operatingHours = OperatingHoursData.reduce((a, n) => (a *= n), 1);
    let drinksServedYearly =
      servingRateTotal * operatingHours * data.numberElements;
    let totalRevenue = drinksServedYearly * data.price;

    setOptions((state) => ({
      ...state,
      totalRevenueBartender: handleNumberFormat(
        numberWithCommas(totalRevenue.toFixed(2))
      ),
    }));

    // Revenue Mixo
    let operatingHoursDataMixo = [52, data.operatingDays, data.operatingHours];
    let operatingHoursMixo = operatingHoursDataMixo.reduce(
      (a, n) => (a *= n),
      1
    );
    let marketingIncome = operatingHoursMixo * 5 * data.numberElements;
    let drinksServedYearlyMixo =
      servingRateTotal * operatingHoursMixo * data.numberElements;
    let totalRevenueMixo =
      drinksServedYearlyMixo * data.price + marketingIncome;

    setOptions((state) => ({
      ...state,
      totalRevenueMixo: handleNumberFormat(
        numberWithCommas(totalRevenueMixo.toFixed(2))
      ),
    }));

    // Cost Bartender
    let bartenderCost = multiplicationFc([
      46,
      data.operatingDays,
      8,
      12.5,
      data.numberElements,
    ]);
    let bartenderCleaningCost = multiplicationFc([
      46,
      data.operatingDays,
      2,
      12.5,
    ]);
    let bartenderAlcoholCost = multiplicationFc([
      drinksServedYearly,
      0.5,
      0.05,
      12,
      data.numberElements,
    ]);
    let bartenderSoftDrinkCost = multiplicationFc([
      drinksServedYearly,
      0.5,
      0.23,
      2.6,
    ]);

    let bartenderIceCost = multiplicationFc([drinksServedYearly, 0.18, 0.6]);

    let totalBartenderCost =
      bartenderCost +
      bartenderCleaningCost +
      bartenderAlcoholCost +
      bartenderSoftDrinkCost +
      bartenderIceCost +
      3511 +
      192;

    setOptions((state) => ({
      ...state,
      totalCostBartender: handleNumberFormat(
        numberWithCommas(totalBartenderCost.toFixed(2))
      ),
    }));

    // Cost Mixo
    let mixoCleaningCost = multiplicationFc([
      52,
      data.operatingDays,
      0.25,
      12.5,
    ]);
    let mixoManitenceCost = multiplicationFc([
      52,
      data.operatingDays,
      0.25,
      12.5,
    ]);
    let mixoAlcoholCost = multiplicationFc([
      drinksServedYearlyMixo,
      0.5,
      0.05,
      12,
    ]);
    let mixoSoftDrinkCost = multiplicationFc([
      drinksServedYearlyMixo,
      0.5,
      0.038,
      1.5,
    ]);
    let mixoWaterCost = multiplicationFc([
      drinksServedYearlyMixo,
      0.5,
      0.192,
      0.002,
    ]);

    let mixoLeaseCost = multiplicationFc([data.numberElements, 12, 800]);
    let mixoTransInstCost = multiplicationFc([data.numberElements, 1200]);

    let totalMixoCost =
      mixoCleaningCost +
      mixoManitenceCost +
      mixoSoftDrinkCost +
      mixoAlcoholCost +
      mixoWaterCost +
      mixoLeaseCost +
      mixoTransInstCost +
      3969 +
      49.92;

    setOptions((state) => ({
      ...state,
      totalCostMixo: handleNumberFormat(
        numberWithCommas(totalMixoCost.toFixed(2))
      ),
    }));

    let netIncomeB = totalRevenue - totalBartenderCost;
    let netIncomeM = totalRevenueMixo - totalMixoCost;

    let netIncome = netIncomeM - netIncomeB;
    let netIncomePercent = (netIncome / netIncomeB) * 100;

    setOptions((state) => ({
      ...state,
      netIncomeB: handleNumberFormat(numberWithCommas(netIncomeB.toFixed(2))),
      netIncomeM: handleNumberFormat(numberWithCommas(netIncomeM.toFixed(2))),
      netIncome: handleNumberFormat(numberWithCommas(netIncome.toFixed(2))),
      netIncomePercent: handleNumberFormat(
        numberWithCommas(netIncomePercent.toFixed(2))
      ),
    }));

    setTimeout(() => {
      setLoading("none");
      setShow("flex");
    }, 3000);

    setShow("none");
    setLoading("flex");
  };

  const handleNumberFormat = (number) => {
    if (lang === "en") return number;

    let replacedCommas = number.replace(/,/, ".");
    let indexOfDot = replacedCommas.lastIndexOf(".");

    let replaced =
      replacedCommas.substring(0, indexOfDot) +
      "," +
      replacedCommas.substring(indexOfDot + 1);

    return replaced;
  };

  return (
    <>
      <Container>
        <SectionTitle>
          <Title>
            {language.advancedCalc.titleOne}
            <br />
            {language.advancedCalc.titleTwo}
          </Title>
          <SectionItems>
            <ItemComponentSubtitle>
              {language.advancedCalc.subtitle}
            </ItemComponentSubtitle>
            {language.advancedCalc.items.map((item, index) => {
              return (
                <ItemComponent style={{ color: "#fff" }} key={index}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="check-icon"
                  />
                  {item}
                </ItemComponent>
              );
            })}
          </SectionItems>
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
                  <LabelContent htmlFor="">
                    <SubmitButton onClick={handleCalculations}>
                      {language.advancedCalc.button}
                    </SubmitButton>
                  </LabelContent>
                </InputElement>
              </InputWrapper>
            </FormWrapper>
          </FormComponent>

          <SectionData
            display={loading}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "150px",
            }}
          >
            <ColorRing
              visible={true}
              height="80"
              width="80"
              colors={["#9012fb", "#9012fb", "#9012fb", "#9012fb", "#9012fb"]}
            />
            <p>Loading...</p>
          </SectionData>
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
  background-size: 800px;
  width: 40%;
`;

const SectionItems = styled.section`
  padding: 0% 10% 0% 10%;
`;

const ItemComponent = styled.h4`
  margin-bottom: 10px;
`;

const ItemComponentSubtitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;
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
`;

const FormWrapper = styled.div`
  gap: 20px;
  flex-direction: column;
`;

const InputWrapper = styled.span`
  display: flex;
  justify-content: ce;
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
  margin-top: 37px;
  border-radius: 8px;
  font-weight: 600;
  padding: 10px;
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
  margin: 0px 0px 20px 40px;
`;

export default AdvancedCalculator;
