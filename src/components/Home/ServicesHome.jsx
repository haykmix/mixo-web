import React from "react";
import IconOne from "../../assets/images/icon/1.png";
import IconTwo from "../../assets/images/icon/2.png";
import IconThree from "../../assets/images/icon/3.png";
import IconFour from "../../assets/images/icon/4.png";

function ServicesHomeOne({ className, text, innerRef }) {
  const { title, subtitle, items } = text.homeService;

  const listData = [
    {
      ...items[0],
      icon: IconOne,
    },
    {
      ...items[1],
      icon: IconTwo,
    },
    {
      ...items[2],
      icon: IconThree,
    },
    {
      ...items[3],
      icon: IconFour,
    },
  ];
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
      ref={innerRef}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">{title}</h3>
              <p className="appie-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row appie-single-service-wrapper">
          {listData.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className={
                    "appie-single-service text-center mt-30 " +
                    `item-${index + 1}` +
                    " wow animated fadeInUp"
                  }
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={item.icon} alt="" width={"80px"} height={"80px"} />
                  <h4 className="appie-title">{item.title}</h4>
                  <p className="appie-subtitle">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesHomeOne;
