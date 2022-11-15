import React from "react";
import videoBg from "../../assets/video/mixo-video.mov";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default Main;
