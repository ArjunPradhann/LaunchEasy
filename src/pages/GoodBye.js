import React from "react";
import "../style/GoodBye.css";
import { TextField } from "@mui/material";
import Button from "../components/Button";

function GoodBye() {
  return (
    <div className="GBMainDiv">
      <div className="GBFirstTitle">
        Say goodbye{" "}
        <span>
          <img src="/bye.svg" alt="bye" />
        </span>{" "}
        to excessive spending on designers, experts, and multiple tools
      </div>
      <div className="GBSubTitle">
        Say hello to Launcheazy - your superstar marketer in your pocket!
      </div>
      <div className="GBInputFieldSection">
        <TextField
          id="outlined-basic"
          placeholder="Enter your work email"
          style={{ width: "400px", marginRight: "10px" }}
        />
        <Button />
      </div>
    </div>
  );
}

export default GoodBye;
