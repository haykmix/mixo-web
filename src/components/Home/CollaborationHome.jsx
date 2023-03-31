import React from "react";
import IconOne from "../../assets/images/collaborators/accio.png";
import IconTwo from "../../assets/images/collaborators/bcnactiva.png";
import IconThree from "../../assets/images/collaborators/creapolis.png";
import IconFour from "../../assets/images/collaborators/netmentora.png";
import IconFive from "../../assets/images/collaborators/enisa.jpg";

function CollaborationHome({ className, text, innerRef }) {
  const { title, subtitle } = text.homeCollaboration;

  const listData = [
    {
      img: IconTwo,
      width: "200",
      height: "60",
      link: "https://www.barcelonactiva.cat/",
    },
    {
      img: IconThree,
      width: "200",
      height: "60",
      link: "https://pemb.cat/es/proyectos-estrategicos/esade_creapolis/95/",
    },
    {
      img: IconFour,
      width: "200",
      height: "90",
      link: "https://netmentoracatalunya.org/es/",
    },
  ];

  const listDataTwo = [
    {
      img: IconOne,
      width: "160",
      height: "90",
      link: "http://www.accio.gencat.cat/ca/inici",
    },
    {
      img: IconFive,
      width: "200",
      height: "90",
      link: "https://www.enisa.es/",
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
        <div className="row justify-content-around align-items-center">
          {listData.map((item, index) => {
            return (
              <div className="mt-40" key={index}>
                <div className="">
                  <a href={item.link}>
                    <img
                      src={item.img}
                      alt=""
                      width={item.width}
                      height={item.height}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="row justify-content-center align-items-center"
          style={{ gap: "100px", marginTop: "40px" }}
        >
          {listDataTwo.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="">
                  <a href={item.link}>
                    <img
                      src={item.img}
                      alt=""
                      width={item.width}
                      height={item.height}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CollaborationHome;
