import React from "react";
import projectThumb from "../../assets/images/project-thumb.png";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

function ProjectHomeOne({ className }) {
  return (
    <>
      <section className={`appie-project-area pb-100 ${className || ""}`}>
        <div className="container">
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
                        Dejanos tu número y nos ponemos en contacto contigo
                      </h3>
                      <h5>Respondemos a todas tus preguntas</h5>
                      <form onSubmit={() => console.log(1)}>
                        <div className="input-box mt-30">
                          <PhoneNumber />
                          <button type="submit">Enviar</button>
                        </div>
                      </form>
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

export default ProjectHomeOne;
