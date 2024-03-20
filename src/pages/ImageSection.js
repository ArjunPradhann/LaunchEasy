import React from "react";
import "../style/ImageSection.css";

function ImageSection() {
  return (
    <div className="ImageMainDiv">
      <img
        src="/BGImage.svg"
        alt="backgroundImage"
        className="backgroundImage "
      />
      <div className="TextOverlay">
        <div className="HeaderText">
          Auto-generate conversion focussed content for ready-to-use marketing
          recipes with AI
        </div>
        <div className="SubHeaderText">
          <div>Explore</div>
          <div>Personalize</div>
          <div>Execute</div>
        </div>
      </div>
      <img
        src="/homePageImage.svg"
        alt="backgroundImage"
        className="foregroundImage"
      />
    </div>
  );
}

export default ImageSection;
