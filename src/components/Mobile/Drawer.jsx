import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo-new-2.png";
import instagram from "../../assets/images/social/instagram.png";
import linkedin from "../../assets/images/social/linkedin.png";
import email from "../../assets/images/icon/mail-blue.png";
import phone from "../../assets/images/icon/phone-blue.png";
import pin from "../../assets/images/icon/pin-blue.png";
import close from "../../assets/images/icon/close.png";

function Drawer({
  drawer,
  action,
  homeRef,
  serviceRef,
  featureRef,
  teamRef,
  contactRef,
  text,
}) {
  const history = useHistory();

  const items = text.menu;

  const executeScrollHome = (e) => {
    if (window.location.pathname !== "/") {
      history.push("/");
    } else {
      homeRef.current.scrollIntoView();
      handleClose(e);
    }
  };

  const executeScrollService = (e) => {
    if (window.location.pathname !== "/") {
      history.push("/");
    } else {
      serviceRef.current.scrollIntoView();
      handleClose(e);
    }
  };

  function executeScrollFeatures(e) {
    if (window.location.pathname !== "/") {
      history.push("/");
    } else {
      featureRef.current.scrollIntoView();
      handleClose(e);
    }
  }

  function executeScrollTeam(e) {
    if (window.location.pathname !== "/") {
      history.push("/");
    } else {
      teamRef.current.scrollIntoView();
      handleClose(e);
    }
  }

  function executeScrollContact(e) {
    if (window.location.pathname !== "/") {
      history.push("/");
    } else {
      contactRef.current.scrollIntoView();
      handleClose(e);
    }
  }

  const handleClose = (e) => {
    action(e);
  };

  return (
    <>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <div className="canvas_close">
                  <a href="/" onClick={handleClose}>
                    <img src={close} alt="" width={13} height={13} style={{marginTop: -5, marginLeft: -1}}/>
                  </a>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <img src={logo} alt="" height={"40px"} />
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={executeScrollHome}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <p>{items[0]}</p>
                    </li>
                    <li
                      onClick={executeScrollService}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <p>{items[1]}</p>
                    </li>
                    <li
                      onClick={executeScrollFeatures}
                      id="pages"
                      className="menu-item-has-children active"
                    >
                      <p>{items[2]}</p>
                    </li>
                    <li
                      onClick={executeScrollTeam}
                      id="news"
                      className="menu-item-has-children active"
                    >
                      <p>{items[3]}</p>
                    </li>
                    <li
                      onClick={executeScrollContact}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <p>{items[4]}</p>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="https://www.instagram.com/mixo.drink/?hl=es">
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
                      <a href="https://www.instagram.com/mixo.drink/?hl=es">
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
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="/">
                        <img src={email} alt="" width={20} height={20}/>{" "}
                        clientes@mixodrink.com
                      </a>
                    </li>
                    <li>
                      <a href="/">
                      <img src={phone} alt="" width={20} height={20}/>{" "} 
                      +(34) 685 56 45 27
                      </a>
                    </li>
                    <li>
                      <a href="/">
                      <img src={pin} alt="" width={20} height={20}/>{" "} 
                      C/ Valencia, 359, 4-2 Barcelona
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
