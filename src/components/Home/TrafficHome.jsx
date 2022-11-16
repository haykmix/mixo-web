import React from "react";
import thumb from "../../assets/images/traffic-thumb.png";

function TrafficHome({ className }) {
  return (
    <section className={`appie-traffic-area pt-140 pb-180 mb-65 mt-65 ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="appie-traffic-title">
              <span>Dashboard</span>
              <h3 className="title">Dashboard para la gestion centralizada</h3>
              <p>
                Gestiona la facturacíon, disponibilidad y mantenimiento de forma
                rápida y senzilla
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service mb-30">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Facturación</h5>
                  <p>Mucker plastered bugger all mate morish are.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-2 mb-30">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Estadisticas</h5>
                  <p>Mucker plastered bugger all mate morish are.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-3">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Mantenimiento</h5>
                  <p>Mucker plastered bugger all mate morish are.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-4">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Customización</h5>
                  <p>Mucker plastered bugger all mate morish are.</p>
                </div>
              </div>
            </div>
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

export default TrafficHome;
