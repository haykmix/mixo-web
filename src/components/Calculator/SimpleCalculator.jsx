import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styled from "styled-components";

import coverImage from "../../assets/images/cover/cover-back.png";

const SimpleCalculator = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [show, setShow] = useState("none");
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [data, setData] = useState({
    operatingDays: "",
    operatingMonth: "",
    price: "",
  });

  const [dataError, setDataError] = useState({
    errorDays: false,
    errorMonth: false,
    errorPrice: false,
    errorEmpty: false,
  });

  const numberWithCommas = (x) => {
    return Intl.NumberFormat("eu-ES").format(x.toString());
  };

  const handelInputChange = (e) => {
    setDataError({
      errorDays: false,
      errorMonth: false,
      errorPrice: false,
      errorEmpty: false,
    });
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCalculations = (e) => {
    e.preventDefault();
    if (
      data.operatingDays !== "" ||
      data.operatingMonth !== "" ||
      data.price !== ""
    ) {
      if (data.operatingDays < 1 || data.operatingDays > 7) {
        setDataError({ ...dataError, errorDays: true });
        setShow("none");
        return 0;
      }

      if (data.operatingMonth < 1 || data.operatingMonth > 12) {
        setDataError({ ...dataError, errorMonth: true });
        setShow("none");
        return 0;
      }

      if (data.price < 1) {
        setDataError({ ...dataError, errorPrice: true });
        setShow("none");
        return 0;
      }

      setTotalRevenue(
        100 * data.operatingDays * 4 * data.operatingMonth * data.price
      );
      setShow("flex");
    } else {
      setShow("none");
      setDataError({ ...dataError, errorEmpty: true });
    }
  };

  const handleSelectedLanguage = (e) => {
    changeLanguage(e.target.value);
    if (e.target.value !== "es") return 0;
  };
  let lang = localStorage.getItem("language");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
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
                <h4>{language.simpleCalc.inputs.days}</h4>
                <InputField
                  type="number"
                  placeholder=""
                  name="operatingDays"
                  onChange={handelInputChange}
                  min="1"
                  max="7"
                />
                <InputResume>{language.simpleCalc.labels.days}</InputResume>
              </LabelContent>
            </InputElement>
            <InputElement>
              <LabelContent htmlFor="">
                <h4>{language.simpleCalc.inputs.month}</h4>
                <InputField
                  type="number"
                  placeholder=""
                  name="operatingMonth"
                  onChange={handelInputChange}
                />
                <InputResume>{language.simpleCalc.labels.month}</InputResume>
              </LabelContent>
            </InputElement>
            <InputElement>
              <LabelContent htmlFor="">
                <h4>{language.simpleCalc.inputs.price}</h4>
                <InputField
                  type="number"
                  placeholder=""
                  name="price"
                  onChange={(event) => handelInputChange(event)}
                />
                <InputResume>{language.simpleCalc.labels.price}</InputResume>
              </LabelContent>
            </InputElement>
          </InputWrapper>
          <InputWrapper>
            <InputElement>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {dataError.errorEmpty && (
                  <p style={{ color: "red" }}>
                    {language.simpleCalc.emptyError}
                  </p>
                )}
                {dataError.errorDays && (
                  <p style={{ color: "red" }}>
                    {language.simpleCalc.daysError}
                  </p>
                )}
                {dataError.errorMonth && (
                  <p style={{ color: "red" }}>
                    {language.simpleCalc.monthError}
                  </p>
                )}
                {dataError.errorPrice && (
                  <p style={{ color: "red" }}>
                    {language.simpleCalc.priceError}
                  </p>
                )}
                <LabelContent htmlFor="">
                  <SubmitButton onClick={handleCalculations}>
                    {language.advancedCalc.button}
                  </SubmitButton>
                </LabelContent>
              </div>
            </InputElement>
          </InputWrapper>
        </FormWrapper>
      </FormComponent>

      <SectionData display={show}>
        <DataWrapper>
          <DataSection>
            <h3>{language.advancedCalc.results.totalIncome}</h3>
            <h5>{language.advancedCalc.year}</h5>
          </DataSection>
          <DataElement>
            <DataText>{numberWithCommas(totalRevenue)} €</DataText>
          </DataElement>
        </DataWrapper>
      </SectionData>
    </div>
  );
};

const Select = styled.select`
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
`;

const FormComponent = styled.form`
  margin: 40px 0px 0px 20px;
  @media (max-width: 425px) {
    margin: 40px 0px 0px 0px;
  }
`;

const FormWrapper = styled.div`
  gap: 20px;
  flex-direction: column;
`;

const InputWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
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

const SectionData = styled.section`
  margin-left: 40px;
  justify-content: center;
  display: ${(props) => props.display};
  @media (max-width: 425px) {
    margin-left: 0px;
  }
  @media (max-width: 770px) {
    margin-left: 0px;
  }
`;

const DataWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 60px;
  @media (max-width: 425px) {
    gap: 0px;
  }
`;

const DataSection = styled.section`
  padding: 35px 20px;
  @media (max-width: 425px) {
    width: 50%;
  }
`;

const DataElement = styled.section`
  margin-top: 20px;
  @media (max-width: 425px) {
    width: 50%;
  }
`;

const DataText = styled.h2`
  font-weight: 800;
  margin-top: 10px;
  color: #4242fb;
  text-align: center;
`;

const LabelContent = styled.label`
  width: 200px;
  margin: 0px 0px 20px 40px;
  @media (max-width: 425px) {
    margin: 0px 0px 20px 0px;
  }
  @media (max-width: 770px) {
    margin: 0px 0px 20px 10px;
  }
`;

export default SimpleCalculator;
