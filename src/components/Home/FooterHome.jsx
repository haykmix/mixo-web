import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-new-2.png";

function FooterHome({ className, text }) {
  const { menus, info } = text.homeFooter;
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
                      <a href="/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Company</h4>
                <ul>
                  {menus.company.data.map((item, index) => {
                    return (
                      <li>
                        <Link to="/about-us">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Contact</h4>
                <ul>
                  {menus.contact.data.map((item) => {
                    return (
                      <li>
                        <Link to="/about-us">{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Get In Touch</h4>
                <ul>
                  <li>
                    <a href="/">
                      <i className="fal fa-envelope" /> {info.email}
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fal fa-phone" /> {info.phone}
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fal fa-map-marker-alt" /> {info.street}
                    </a>
                  </li>
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
