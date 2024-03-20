import React from "react";
import "../style/MarketRec.css";

function MarketRec() {
  const MRdata = [
    {
      img: "./first.svg",
      title: "Campaigns",
      subTitle: "Attract potential clients",
      content:
        "Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery across channels.",
      reDirectButton: "View all Campaigns",
    },
    {
      img: "./second.svg",
      title: "Workflows",
      subTitle: "Convert prospects into profits",
      content:
        "Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion.",
      reDirectButton: "View all Workflows",
    },
    {
      img: "./third.svg",
      title: "Programs",
      subTitle: "Retain existing customers",
      content:
        "Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs.",
      reDirectButton: "View all Programs",
    },
  ];
  return (
    <div className="MRMainDiv">
      <div className="MRFirstPart">
        <div className="MRStartdiv">Marketing Recipes</div>
        <div className="MRBigHead">Attract. Convert. Retain.</div>
        <div className="MRDescription">
          A library of ready-to-use marketing campaigns, workflows and programs
          to accelerate your growth, maximize savings and reduce efforts.
        </div>
        <div className="MRRedirectButton">Visit the library</div>
      </div>
      <div className="MrsecondSection">
        {MRdata.map((data, idx) => (
          <div className="MrBoxStyle">
            <img src={data.img} alt="images" className="MRImage" />
            <div className="contentContainer">
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "18px",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#525252",
                }}
              >
                {data.title}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  marginTop: "8px",
                }}
              >
                {data.subTitle}
              </div>
              <div
                style={{
                  fontFamily: "Helvetica Neue !important",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  color: "#525252",
                  marginTop: "8px",
                }}
              >
                {data.content}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textAlign: "end",
                }}
              >
                {data.reDirectButton}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketRec;
