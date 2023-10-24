import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import videoOne from "../../assets/video/video-voice-gallery.mp4";
import videoTwo from "../../assets/video/shoko.mp4";
import videoThree from "../../assets/video/video-cover.mp4";
import imageVideoOne from "../../assets/images/video/video-cover.jpg";
import imageVideoTwo from "../../assets/images/video/shoko.jpg";
import imageVideoThree from "../../assets/images/video/party-cover.jpg";
import playButton from "../../assets/images/video/boton-de-play.png";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GalleryHome({ className, text }) {
  const { title, subtitle, videos } = text.homeGallery;
  const ref = useRef(null);

  const [spanWidth, setSpanWidth] = useState(0);
  const [toggleVideo, setToggleVideo] = useState({
    v0: false,
    v1: false,
    v2: false,
  });

  useEffect(() => {
    setSpanWidth(ref.current.offsetWidth);
  }, []);

  const handleToggleVideo = (id) => {
    setToggleVideo({
      ...toggleVideo,
      [id]: !toggleVideo[id],
    });
  };

  return (
    <>
      <section>
        <div className="appie-section-title text-center pb-40 pt-80">
          <h3 className="appie-title">{title}</h3>
          <p>{subtitle}</p>
        </div>
        <section className="gallery_container">
          <div className="gallery_Section_left">
            <div className="gallery_item_container" ref={ref}>
              <ComponentSpan width={spanWidth}>
                <h1>{videos[0].title}</h1>
                <h4>{videos[0].subtitle}</h4>
                <button onClick={() => handleToggleVideo("v0")}>
                  <img src={playButton} alt="" />
                </button>
              </ComponentSpan>
              <img src={imageVideoOne} alt="" className="gallery_item_image" />
            </div>

            <Modal
              isOpen={toggleVideo.v0}
              onRequestClose={() => handleToggleVideo("v0")}
              contentLabel="My dialog"
              className="my-modal"
              overlayClassName="my-overlay"
              closeTimeoutMS={100}
            >
              <video autoPlay={true} loop={true} className="video-modal">
                <source src={videoOne} />
              </video>
              <button
                onClick={() => handleToggleVideo("v0")}
                className="close-button"
              >
                <FontAwesomeIcon icon={faXmark} className="close-icon" />
              </button>
            </Modal>

            <div className="gallery_item_container">
              <ComponentSpan width={spanWidth}>
                <h1>{videos[1].title}</h1>
                <h4>{videos[1].subtitle}</h4>
                <button onClick={() => handleToggleVideo("v1")}>
                  <img src={playButton} alt="" />
                </button>
              </ComponentSpan>
              <img src={imageVideoTwo} alt="" className="gallery_item_image" />
            </div>
            <Modal
              isOpen={toggleVideo.v1}
              onRequestClose={() => handleToggleVideo("v1")}
              contentLabel="My dialog"
              className="my-modal my-modal-two"
              overlayClassName="my-overlay"
              closeTimeoutMS={100}
            >
              <video
                autoPlay={true}
                loop={true}
                className="video-modal"
                style={{ width: "560px" }}
              >
                <source src={videoTwo} />
              </video>
              <button
                onClick={() => handleToggleVideo("v1")}
                className="close-button"
              >
                <FontAwesomeIcon icon={faXmark} className="close-icon" />
              </button>
            </Modal>

            <div className="gallery_item_container">
              <ComponentSpan width={spanWidth}>
                <h1>{videos[2].title}</h1>
                <h4>{videos[2].subtitle}</h4>
                <button onClick={() => handleToggleVideo("v2")}>
                  <img src={playButton} alt="" />
                </button>
              </ComponentSpan>
              <img
                src={imageVideoThree}
                alt=""
                className="gallery_item_image"
              />
            </div>
            <Modal
              isOpen={toggleVideo.v2}
              onRequestClose={() => handleToggleVideo("v2")}
              contentLabel="My dialog"
              className="my-modal"
              overlayClassName="my-overlay"
              closeTimeoutMS={100}
            >
              <video autoPlay={true} loop={true} className="video-modal">
                <source src={videoThree} />
              </video>
              <button
                onClick={() => handleToggleVideo("v2")}
                className="close-button"
              >
                <FontAwesomeIcon icon={faXmark} className="close-icon" />
              </button>
            </Modal>
          </div>
        </section>
      </section>
    </>
  );
}

const ComponentSpan = styled.span`
  width: ${(props) => props.width}px;
  height: 420px;
  background-color: #0000007a;
  position: absolute;
`;

export default GalleryHome;
