import React from "react";
import teamTwo from "../../assets/images/team-1.jpg";
import teamOne from "../../assets/images/team-2.jpg";
import teamThree from "../../assets/images/team-3.jpg";
import teamFour from "../../assets/images/team-4.jpg";

function TeamHome({ className }) {
  return (
    <>
      <section className={`appie-team-area pb-100 ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Meet our Team Members</h3>
                <p>Different layouts and styles for team sections.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb">
                  <img src={teamOne} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Martin Cohen Leibenberg</h5>
                  <span>CEO-Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb">
                  <img src={teamTwo} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Xavier Olivé Galán</h5>
                  <span>Lead Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src={teamThree} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Hayk Petrosyan Elmayan</h5>
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src={teamFour} alt="" />
                </div>
                <div className="content text-center">
                  <h5 className="title">Eric Achtman</h5>
                  <span>Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamHome;
