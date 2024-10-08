import React from "react";
import teamTwo from "../../assets/images/team-1.jpg";
import teamOne from "../../assets/images/team-2.jpg";
import teamThree from "../../assets/images/team-3.jpg";
import teamFour from "../../assets/images/team-4.jpg";
import teamFive from "../../assets/images/team-5.jpg";
import teamSix from "../../assets/images/team-6.jpg";
import teamSeven from "../../assets/images/team-7.jpg";
import teamEight from "../../assets/images/team-8.jpg";
import teamNine from "../../assets/images/team-9.jpg";


function TeamHome({ className, text, innerRef }) {
  const { title, subtitle } = text.homeTeam;
  return (
    <>
      <section
        className={`appie-team-area pb-100 ${className || ""}`}
        ref={innerRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center flex-wrap">
            <div className="d-flex justify-content-center">
              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="thumb">
                    <img src={teamOne} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Martin Cohen</h5>
                    <span>CEO-Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="thumb">
                    <img src={teamThree} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Hayk Petrosyan</h5>
                    <span>Full Stack Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="thumb">
                    <img src={teamFour} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Vicente Rubio</h5>
                    <span>Business Developer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="thumb">
                    <img src={teamNine} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Paola Fernández</h5>
                    <span>Content Creator</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="thumb">
                    <img src={teamFive} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Xavier Guillem</h5>
                    <span>Advisor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-lg-2 col-md-4">
                <div
                  className="appie-team-item mt-30 wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <div className="thumb">
                    <img src={teamSeven} alt="" />
                  </div>
                  <div className="content text-center">
                    <h5 className="title">Oriol Pascual</h5>
                    <span>Advisor</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4"></div>
              <div className="col-lg-2 col-md-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamHome;
