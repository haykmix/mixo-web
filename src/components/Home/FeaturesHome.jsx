import React, { useState } from "react";
import { Link } from "react-router-dom";
import thumbOneEs from "../../assets/images/features/frame-one.png";
import thumbTwoEs from "../../assets/images/features/frame-two.png";
import thumbThreeEs from "../../assets/images/features/frame-three.png";
import thumbFourEs from "../../assets/images/features/frame-four.png";
import thumbOneEn from "../../assets/images/features/frame-one-en.png";
import thumbTwoEn from "../../assets/images/features/frame-two-en.png";
import thumbThreeEn from "../../assets/images/features/frame-three-en.png";
import thumbFourEn from "../../assets/images/features/frame-four-en.png";

import shapeSix from "../../assets/images/shape/shape-6.png";
import shapeSeven from "../../assets/images/shape/shape-7.png";
import shapeEight from "../../assets/images/shape/shape-8.png";

import integration from "../../assets/images/icon/integration.png";
import screen from "../../assets/images/icon/screen.png";
import service from "../../assets/images/icon/service.png";
import payment from "../../assets/images/icon/payment.png";

function FeaturesHomeOne({ className, text, innerRef }) {
  const { items } = text.homeProduct;
  let lang = localStorage.getItem("language");
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
      icon: integration,
      image: lang === "es" ? thumbOneEs : thumbOneEn,
    },
    {
      ...items[1],
      name: "report",
      pill: "profile",
      icon: screen,
      image: lang === "es" ? thumbTwoEs : thumbTwoEn,
    },
    {
      ...items[2],
      name: "notice",
      pill: "messages",
      icon: service,
      image: lang === "es" ? thumbThreeEs : thumbThreeEn,
    },
    {
      ...items[3],
      name: "app",
      pill: "settings",
      icon: payment,
      image: lang === "es" ? thumbFourEs : thumbFourEn,
    },
  ];

  return (
    <section
      className={`appie-features-area pt-100 mb-200 mt-85 ${className}`}
      id="features"
      ref={innerRef}
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
                      <span>
                        <img src={item.icon} alt="" width={30} height={30} />
                      </span>
                      {item.menu}
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
