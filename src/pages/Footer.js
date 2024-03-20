import React from "react";
import "../style/Footer.css";
import { TextField } from "@mui/material";
import Button from "../components/Button";

function Footer() {
  const footerData = [
    { AI: { heading: "AI Tools" } },
    { AI: { title1: "ChatGPT Prompts" } },
    { AI: { title2: "AI Tools Directory" } },
    { AI: { title3: "AI QR Generator" } },
    { Resource: { heading: "Resources" } },
    { Resource: { title1: "Marketplaces" } },
    { Resource: { title2: "Blogs" } },
    { Resource: { title3: "Help Center" } },
    { Company: { heading: "Company" } },
    { Company: { title1: "About Us" } },
    { Company: { title2: "Pricing" } },
    { Company: { title3: "Contact Us" } },
  ];

  return (
    <div className="FooterMainDiv">
      <div className="FirstSection">
        <div>
          <img src="/companyLogo2.svg" alt="Logo" />
          <div className="FSubtitle">
            Engage customers, convert prospects effortlessly
          </div>
          <div className="IconSection">
            <img src="/Linkedin.svg" alt="Logo" />
            <img src="/Facebook.svg" alt="Logo" />
            <img src="/Instagram.svg" alt="Logo" />
            <img src="/Email.svg" alt="Logo" />
          </div>
        </div>
        <div className="SecondSection">
          <div>
            {footerData.map((data, idx) => (
              <>
                <div className="HeadingStyle">{data.AI?.heading}</div>
                <div className="contentStyle">{data.AI?.title1}</div>
                <div className="contentStyle">{data.AI?.title2}</div>
                <div className="contentStyle">{data.AI?.title3}</div>
              </>
            ))}
          </div>
          <div>
            {footerData.map((data, idx) => (
              <>
                <div className="HeadingStyle">{data.Resource?.heading}</div>
                <div className="contentStyle">{data.Resource?.title1}</div>
                <div className="contentStyle">{data.Resource?.title2}</div>
                <div className="contentStyle">{data.Resource?.title3}</div>
              </>
            ))}
          </div>
          <div>
            {footerData.map((data, idx) => (
              <>
                <div className="HeadingStyle">{data.Company?.heading}</div>
                <div className="contentStyle">{data.Company?.title1}</div>
                <div className="contentStyle">{data.Company?.title2}</div>
                <div className="contentStyle">{data.Company?.title3}</div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="NewsLetterSection">
        <div className="NewsLetterInnerDiv">
          <div className="NLLeftSide">
            <div className="NLtitle">NEWS LETTER</div>
            <div className="NLBIGtitle">The AI Launchpad 🚀</div>
            <div className="NLSubTitle">
              Receive must-read articles and trends on marketing and artificial
              intelligence, from leading publications in your inbox.
            </div>
          </div>
          <div className="NLRightSide">
            <div className="NLInputField">
              <TextField
                id="outlined-basic"
                placeholder="Enter your work email"
                style={{
                  width: "400px",
                  marginRight: "10px",
                  background: "white",
                  borderRadius: "6px",
                }}
              />
              <Button />
            </div>
            <div className="NLSubDes">
              By signing up, you are agreeing to our
              <span style={{ color: "#4589FF" }}> privacy statement</span>.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="NLLastDiv">
        <div className="NLFirst">
          Copyright 2023 Launcheazy AI Private Limited. All rights reserved.
        </div>
        <div className="NLFirst">Privacy Policy | Terms of Service</div>
      </div>
    </div>
  );
}

export default Footer;
