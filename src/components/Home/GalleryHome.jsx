import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import image from "../../assets/images/about-thumb-2.png";
import videoOne from "../../assets/video/video-voice-gallery.mp4";
import videotwo from "../../assets/video/video-voice-gallery.mp4";
import videoThree from "../../assets/video/video-voice-gallery.mp4";
import imageVideoOne from "../../assets/images/video/video-cover.jpg";
import imageVideoTwo from "../../assets/images/video/image-render.jpg";
import playButton from "../../assets/images/video/boton-de-play.png";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowDimensions from '../../Hooks/useWindowDimensions';

function GalleryHome({ className, text }) {
  const ref = useRef(null);
  const { height, width } = useWindowDimensions();

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

  const ComponentSpan = styled.span`
    width: ${(props) => props.width}px;
    height: 520px;
    background-color: #0000007a;
    position: absolute;
  `;

  return (
    <>
      <section className="gallery_container">
        <div className="gallery_Section_left">
          <div className="gallery_item_container" ref={ref}>
            <ComponentSpan width={spanWidth}>
              <h1>Video presentación</h1>
              <h4>Conoce la maquina</h4>
              <button onClick={() => handleToggleVideo("v0")}>
                <img src={playButton} alt="" />
              </button>
            </ComponentSpan>
            <img src={imageVideoOne} alt="" />
          </div>

          <Modal
            isOpen={toggleVideo.v0}
            onRequestClose={() => handleToggleVideo("v0")}
            contentLabel="My dialog"
            className="my-modal"
            overlayClassName="my-overlay"
            closeTimeoutMS={500}
          >
            <video
              autoPlay={true}
              loop={true}
              className="video-modal"
            >
              <source src={videoThree} />
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
              <h1>Video render</h1>
              <h4>Render dinámico</h4>
              <button onClick={() => handleToggleVideo("v1")}>
                <img src={playButton} alt="" />
              </button>
            </ComponentSpan>
            <img src={imageVideoTwo} alt="" />
          </div>
          <Modal
            isOpen={toggleVideo.v1}
            onRequestClose={() => handleToggleVideo("v1")}
            contentLabel="My dialog"
            className="my-modal"
            overlayClassName="my-overlay"
            closeTimeoutMS={500}
          >
            <video
              autoPlay={true}
              loop={true}
              className="video-modal"
            >
              <source src={videoThree} />
            </video>
            <button
              onClick={() => handleToggleVideo("v1")}
              className="close-button"
            >
              <FontAwesomeIcon icon={faXmark} className="close-icon" />
            </button>
          </Modal>
        </div>
        <div className="gallery_Section_right">
          <div className="gallery_item_container">
            <ComponentSpan width={spanWidth}>
              <h1>Video</h1>
              <h4>This video with content</h4>
              <button onClick={() => handleToggleVideo("v2")}>
                <img src={playButton} alt="" />
              </button>
            </ComponentSpan>
            <img src={imageVideoOne} alt="" />
          </div>
          <Modal
            isOpen={toggleVideo.v2}
            onRequestClose={() => handleToggleVideo("v2")}
            contentLabel="My dialog"
            className="my-modal"
            overlayClassName="my-overlay"
            closeTimeoutMS={500}
          >
            <video
              autoPlay={true}
              loop={true}
              className="video-modal"
            >
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
    </>
  );
}

export default GalleryHome;
