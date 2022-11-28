import {
  faFile,
  faMessage,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import heroThumbOne from "../../assets/images/hero-thumb-1-new.png";
import video from "../../assets/video/video-cover.mp4";

function HeroHome({ className, text, innerRef, contactRef, featureRef }) {
  const history = useHistory();
  const { upTitle, title, subtitle, buttonDemo, buttonInfo } = text.homeCover;

  const [videoToggle, setVideoToggle] = useState(false);


  const handleVideo = () => {
    setVideoToggle(!videoToggle);
  };

  function executeScrollContact() {
    window.location.pathname !== "/"
      ? history.push("/")
      : contactRef.current.scrollIntoView();
  }

  function executeScrollFeatures() {
    window.location.pathname !== "/"
      ? history.push("/")
      : featureRef.current.scrollIntoView();
  }

  return (
    <>
      <section className={`appie-hero-area ${className || ""}`} ref={innerRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>{upTitle}</span>
                <p className="glitch">
                  <span aria-hidden="true">{title}</span>
                  {title}
                  <span aria-hidden="true">{title}</span>
                </p>
                {/* <h1 className="appie-title">{title}</h1> */}
                <p>{subtitle}</p>
                <ul>
                  <li>
                    <p onClick={executeScrollContact}>
                      <FontAwesomeIcon icon={faMessage} /> &nbsp; {buttonDemo}
                    </p>
                  </li>
                  <li>
                    <p onClick={executeScrollFeatures}>
                      <FontAwesomeIcon icon={faFile} /> &nbsp; {buttonInfo}
                    </p>
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
                  <VideoOpen toggle={videoToggle}>
                    <FontAwesomeIcon
                      icon={faCompress}
                      style={{ color: "#fff" }}
                    />
                  </VideoOpen>
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

const VideoOpen = styled.span`
  position: absolute;
  top: ${(props) => (props.toggle === true ? 85 : 74)}%;
  left: ${(props) => (props.toggle === true ? 3 : 5)}%; ;
`;

export default HeroHome;
