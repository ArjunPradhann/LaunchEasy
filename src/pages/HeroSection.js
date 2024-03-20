import React from "react";
import "../style/HeroSection.css";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import ImageSection from "./ImageSection";

function HeroSection() {
  return (
    <>
      <div className="HeroSectionMain">
        <div className="ButtonStyle">
          <img
            src="/LiveAnimation.svg"
            alt="RedCircle"
            style={{ marginRight: "6px" }}
          />
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "Helvetica",
            }}
          >
            Our exclusive beta is live.{" "}
          </span>
          <span
            style={{
              fontWeight: "700",
              fontSize: "16px",
              fontFamily: "Helvetica",
              color: "#4589FF",
            }}
          >
            Sign up for free
          </span>
        </div>
        <div className="HeroSectionMainHeading">Generate leads</div>
        <div className="HeroSectionSubHeading">
          in 3 clicks for your business
        </div>
        <div className="HSSubtitle">
          Simplify your marketing efforts with AI. Use a collection of
          ready-made, successful marketing strategies that practically run
          themselves.
        </div>
        <div className="HSInputFieldSection">
          <TextField
            id="outlined-basic"
            placeholder="Enter your work email"
            style={{ width: "400px", marginRight: "10px" }}
          />
          <Button />
        </div>
        <div
          style={{
            marginTop: "16px",
            marginBottom: "80px",
            color: "#A8A8A8",
            width: "450px",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          Get access to a comprehensive directory of{" "}
          <span
            style={{
              color: "#F18D13",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            AI Tools
          </span>{" "}
          and <span style={{ color: "#F18D13" }}>ChatGPT Prompts</span> to
          elevate your business.
        </div>
      </div>

      <ImageSection />
    </>
  );
}

export default HeroSection;
