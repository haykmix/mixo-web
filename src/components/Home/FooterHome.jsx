import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo-new.png";

import instagram from "../../assets/images/social/instagram.png";
import linkedin from "../../assets/images/social/linkedin.png";

function FooterHome({
  className,
  text,
  homeRef,
  serviceRef,
  featureRef,
  teamRef,
  contactRef,
}) {
  const { menus, info } = text.homeFooter;
  const history = useHistory();

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

  const funList = [
    executeScrollHome,
    executeScrollService,
    executeScrollFeatures,
    executeScrollTeam,
    executeScrollContact,
  ];

  return (
    <>
      <section className={`appie-footer-area ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="" height={"80px"} />
                  </a>
                </div>
                <p>Speed up fun</p>
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a
                        className="fac"
                        href="https://www.instagram.com/mixo.drink/"
                        target="blank"
                      >
                        <img
                          src={instagram}
                          alt=""
                          width={20}
                          height={20}
                          style={{ marginTop: -5 }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="lin"
                        href="https://es.linkedin.com/company/mixodrink"
                        target="blank"
                      >
                        <img
                          src={linkedin}
                          alt=""
                          width={20}
                          height={20}
                          style={{ marginTop: -5 }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">{menus.company.title}</h4>
                <ul>
                  {menus.company.data.map((item, index) => {
                    return (
                      <li key={index} onClick={funList[index]}>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">{menus.contact.title}</h4>
                <ul>
                  {menus.contact.data.map((item, index) => {
                    return (
                      <li key={index}>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">{info.title}</h4>
                <ul>
                  <li>{info.email}</li>
                  <li>{info.phone}</li>
                  <li>{info.street}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterHome;
