import { faFile, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

import heroThumbOne from "../../assets/images/hero-thumb-1-new.png";
import video from "../../assets/video/video-cover.mp4";

function HeroHomeOne({ className, text, innerRef }) {
  const { upTitle, title, subtitle, buttonDemo, buttonInfo } = text.homeCover;

  const [videoToggle, setVideoToggle] = useState(false);

  const handleVideo = () => {
    setVideoToggle(!videoToggle);
  };

  return (
    <>
      <section className={`appie-hero-area ${className || ""}`} ref={innerRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>{upTitle}</span>
                <h1 className="appie-title">{title}</h1>
                <p>{subtitle}</p>
                <ul>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faMessage} /> &nbsp; {buttonDemo}
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faFile} /> &nbsp; {buttonInfo}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src={heroThumbOne} alt="" width="310px" height="616px" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                  onClick={handleVideo}
                >
                  <Video
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    toggle={videoToggle}
                    className="video"
                  >
                    <source src={video} />
                  </Video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-shape-1">
          <img src={shapeThree} alt="" width="100px" height="100px" />
        </div>
        <div className="hero-shape-2">
          <img src={shapeFour} alt="" width="100px" height="100px" />
        </div>
        <div className="hero-shape-3">
          <img src={shapeTwo} alt="" width="100px" height="100px" />
        </div> */}
      </section>
    </>
  );
}

const Video = styled.video`
  width: auto;
  height: ${(props) => (props.toggle === true ? 300 : 150)}px;
  border: 3px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 30px 70px 0px rgba(0, 0, 0, 0.349);
`;

export default HeroHomeOne;
