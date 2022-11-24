import React, { useState } from "react";
import { Link } from "react-router-dom";
import thumbOne from "../../assets/images/features/features-thumb-1.png";
import thumbTwo from "../../assets/images/features/features-thumb-2.png";
import thumbThree from "../../assets/images/renders/render-color.png";
import shapeSix from "../../assets/images/shape/shape-6.png";
import shapeSeven from "../../assets/images/shape/shape-7.png";
import shapeEight from "../../assets/images/shape/shape-8.png";

function FeaturesHomeOne({ className, text }) {
  const { items } = text.homeProduct;
  const [tab, setTab] = useState("setting");
  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  const data = [
    {
      ...items[0],
      name: "setting",
      pill: "home",
      icon: "fas fa-cog",
      image: thumbOne,
      width: "300px",
    },
    {
      ...items[1],
      name: "report",
      pill: "profile",
      icon: "fas fa-exclamation-triangle",
      image: thumbThree,
      width: "275px",
    },
    {
      ...items[2],
      name: "notice",
      pill: "messages",
      icon: "fas fa-bell",
      image: thumbTwo,
    },
    {
      ...items[3],
      name: "app",
      pill: "settings",
      icon: "fas fa-lock",
      image: thumbTwo,
    },
  ];

  return (
    <section
      className={`appie-features-area pt-100 mb-65 mt-65 ${className}`}
      id="features"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="appie-features-tabs-btn">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {data.map((item, index) => {
                  return (
                    <a
                      onClick={(e) => handleClick(e, item.name)}
                      className={`nav-link ${
                        tab === item.name ? "active" : ""
                      }`}
                      id={`v-pills-${item.pill}-tab`}
                      data-toggle="pill"
                      href={`#v-pills-${item.pill}`}
                      role="tab"
                      aria-controls={`v-pills-${item.pill}`}
                      aria-selected="true"
                      key={index}
                    >
                      <i className={item.icon} /> {item.menu}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              {data.map((item, index) => {
                return (
                  <div
                    className={`${
                      tab === item.name ? "show active" : ""
                    } tab-pane fade`}
                    id={`v-pills-${item.pill}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${item.pill}-tab`}
                    key={index}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div
                          className="appie-features-thumb text-center wow animated fadeInUp"
                          data-wow-duration="2000ms"
                          data-wow-delay="200ms"
                        >
                          <img
                            src={item.image}
                            alt=""
                            width={item.width}
                            height="500px"
                            style={
                              index === 0
                                ? { marginLeft: "20px" }
                                : { marginLeft: "0px" }
                            }
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="appie-features-content wow animated fadeInRight"
                          data-wow-duration="2000ms"
                          data-wow-delay="600ms"
                        >
                          <span>{item.upTitle}</span>
                          <h3 className="title">{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="features-shape-1">
        <img src={shapeSix} alt="" />
      </div>
      <div className="features-shape-2">
        <img src={shapeSeven} alt="" />
      </div>
      <div className="features-shape-3">
        <img src={shapeEight} alt="" />
      </div>
    </section>
  );
}

export default FeaturesHomeOne;
