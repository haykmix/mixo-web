import React from "react";
import projectThumb from "../../assets/images/hand-3d.jpg";
import whatsapp from "../../assets/images/whatsapp.png";

function WhatsappHome({ className, text }) {
  return (
    <>
      <section className={`appie-project-area pb-100 ${className || ""}`}>
        <div className="container pt-100">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appie-project-box wow animated slideInUp"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="appie-project-content">
                      <h3 className="title">
                        {text.homeCta.title}
                      </h3>
                      <h5> {text.homeCta.subtitle}</h5>
                      <div className="input-box mt-30">
                        <a
                          href="https://wa.me/34685564527?text=Hola Vicente, encantado..."
                          target={"_blank"}
                          rel="noreferrer"
                        >
                        <img src={whatsapp} alt="whatsapp"/>
                        {text.homeCta.button}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="appie-project-thumb">
                  <img src={projectThumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatsappHome;
