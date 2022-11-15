import React, { useState } from "react";
import { Link } from "react-router-dom";
import thumbOne from "../../assets/images/features/features-thumb-1.png";
import thumbTwo from "../../assets/images/features/features-thumb-2.png";
import thumbThree from "../../assets/images/renders/render-color.png";
import shapeSix from "../../assets/images/shape/shape-6.png";
import shapeSeven from "../../assets/images/shape/shape-7.png";
import shapeEight from "../../assets/images/shape/shape-8.png";

function FeaturesHomeOne({ className }) {
  const [tab, setTab] = useState("setting");
  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  const data = [
    {
      name: "setting",
      pill: "home",
      menu: "Prototype",
      icon: "fas fa-cog",
      upTitle: "Custom One",
      title: "Let the Conversation flow",
      text: "Car boot absolutely bladdered posh burke the wireless mush some dodg.",
      button: "Learn More",
      image: thumbOne,
      width: "300px"
    },
    {
      name: "report",
      pill: "profile",
      menu: "Custom",
      icon: "fas fa-exclamation-triangle",
      upTitle: "Custom Two",
      title: "Let the Conversation flow",
      text: "Car boot absolutely bladdered posh burke the wireless mush some dodg.",
      button: "Learn More",
      image: thumbThree,
      width: "275px"
    },
    {
      name: "notice",
      pill: "messages",
      menu: "Software",
      icon: "fas fa-bell",
      upTitle: "Custom Three",
      title: "Let the Conversation flow",
      text: "Car boot absolutely bladdered posh burke the wireless mush some dodg.",
      button: "Learn More",
      image: thumbTwo,
    },
    {
      name: "app",
      pill: "settings",
      menu: "Porduct",
      icon: "fas fa-lock",
      upTitle: "Custom Four",
      title: "Let the Conversation flow",
      text: "Car boot absolutely bladdered posh burke the wireless mush some dodg.",
      button: "Learn More",
      image: thumbTwo,
    },
  ];

  return (
    <section
      className={`appie-features-area pt-100 ${className}`}
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
                          <img src={item.image} alt="" width={item.width} height="500px"/>
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
                          <Link className="main-btn" to="/about-us">
                            {item.button}
                          </Link>
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
