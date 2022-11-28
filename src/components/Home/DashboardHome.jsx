import React from "react";
import thumb from "../../assets/images/traffic-thumb.png";

function DashboardHome({ className, text }) {
  const { uptitle, title, subtitle, items } = text.homeDashboard;

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div className="col-lg-6 col-md-6" key={index}>
          <div
            className={
              index === 0
                ? "appie-traffic-service mb-30"
                : `appie-traffic-service mb-30 item-${index + 1}`
            }
          >
            <div className="icon">
              <i className="fal fa-check" />
            </div>
            <h5 className="title">{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <section
      className={`appie-traffic-area pt-140 pb-180 mb-65 mt-65 ${
        className || ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="appie-traffic-title">
              <span>{uptitle}</span>
              <h3 className="title">{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="row">{renderItems()}</div>
          </div>
        </div>
      </div>
      <div className="traffic-thumb ">
        <img
          className="wow animated fadeInRight"
          data-wow-duration="2000ms"
          data-wow-delay="200ms"
          src={thumb}
          alt=""
        />
      </div>
    </section>
  );
}

export default DashboardHome;
