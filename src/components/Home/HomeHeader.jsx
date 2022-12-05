import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo-new-2.png";
import { LanguageContext } from "../../context/LanguageContext";
import StickyMenu from "../../lib/StickyMenu";

function HomeHeader({
  darkEnable = false,
  action,
  langEnabled = false,
  changeMode,
  changeModeLan,
  dark,
  className,
  homeRef,
  serviceRef,
  featureRef,
  teamRef,
  contactRef,
  text,
}) {
  const history = useHistory();
  const { changeLanguage } = useContext(LanguageContext);
  let lang = localStorage.getItem("language");

  const handleSelectedLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  function executeScrollHome() {
    window.location.pathname !== "/"
      ? history.push("/")
      : homeRef.current.scrollIntoView();
  }
  
  function executeScrollService() {
    window.location.pathname !== "/"
      ? history.push("/")
      : serviceRef.current.scrollIntoView();
  }

  function executeScrollFeatures() {
    window.location.pathname !== "/"
      ? history.push("/")
      : featureRef.current.scrollIntoView();
  }

  function executeScrollTeam() {
    window.location.pathname !== "/"
      ? history.push("/")
      : teamRef.current.scrollIntoView();
  }

  function executeScrollContact() {
    window.location.pathname !== "/"
      ? history.push("/")
      : contactRef.current.scrollIntoView();
  }

  useEffect(() => {
    StickyMenu();
  });
  return (
    <header className={`appie-header-area appie-sticky ${className || ""}`}>
      <div className="container">
        <div className="header-nav-box">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
              <div className="appie-logo-box">
                <a href="/">
                  <img src={logo} alt="" height="30px" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
              <div className="appie-header-main-menu text-right">
                <ul>
                  <li onClick={executeScrollHome}>
                    <span>{text.menu[0]}</span>
                  </li>
                  <li onClick={executeScrollService}>
                    <span>{text.menu[1]}</span>
                  </li>
                  <li onClick={executeScrollFeatures}>
                    <span>{text.menu[2]}</span>
                  </li>
                  <li onClick={executeScrollTeam}>
                    <span>{text.menu[3]}</span>
                  </li>
                  <li onClick={executeScrollContact}>
                    <span>{text.menu[4]}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
              <div className="appie-btn-box text-right">
                <Select
                  name="lang"
                  id="lang"
                  defaultValue={lang}
                  onChange={handleSelectedLanguage}
                >
                  <option value="es">🇪🇸ES</option>
                  <option value="en">🇬🇧EN</option>
                </Select>
                <div
                  onClick={(e) => action(e)}
                  className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                >
                  <i className="fa fa-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const Select = styled.select`
  border: none;
`;

export default HomeHeader;
