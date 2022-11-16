import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo-new-2.png";

function Drawer({ drawer, action, homeRef, serviceRef, featureRef, teamRef }) {
  const history = useHistory();
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };

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
                    <i className="fa fa-times"></i>
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
                      <a href="/">Home</a>
                    </li>
                    <li
                      onClick={executeScrollService}
                      id="service"
                      className="menu-item-has-children active"
                    >
                      <a href="/">Product</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "pages")}
                      id="pages"
                      className="menu-item-has-children active"
                    >
                      <a href="/">Software</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "news")}
                      id="news"
                      className="menu-item-has-children active"
                    >
                      <a href="/">Team</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fal fa-envelope"></i> support@appie.com
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fal fa-phone"></i> +(642) 342 762 44
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fal fa-map-marker-alt"></i> 442 Belle
                        Terre St Floor 7, San Francisco, AV 4206
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
