import React from "react";
import "../style/MakertTools.css";
import Button from "../components/Button";

function MakertTools() {
  const MakertToolsDatum = [
    {
      title: "Reputation Management",
      description: "Improve online reputation and business listings.",
      color: "#A6C8FF",
    },
    {
      title: "Smart Inbox",
      description:
        "Manage customer conversations from every channel in a single, easy-to-use inbox.",
      color: "#FEC57B",
    },
    {
      title: "Social Media Management",
      description:
        "Manage your social media profiles and paid ads from a single intuitive view.",
      color: "#6FDC8C",
    },
    {
      title: "Marketing Plan",
      description: "Run your entire marketing on autopilot.",
      color: "#FFB3B8",
    },
    {
      title: "Unified Reporting",
      description: "Track ROI on every dollar spend.",
      color: "#E0E0E0",
    },
  ];

  return (
    <div className="MTMainDiv">
      <div className="MTInnerDiv">
        <div className="MtLeftSide">
          <div className="MtTitleName">MARKETING TOOLS</div>
          <div className="MTDescription">
            Skyrocket your &#128640; growth with advanced marketing tools
          </div>
          <div className="MTSubDescription">
            A library of ready-to-use marketing campaigns, workflows and
            programs to accelerate your growth, maximize savings and reduce
            efforts.
          </div>

          <div className="MtButtonStyle">
            <Button />
          </div>
        </div>
        <div className="MtrightSide">
          {MakertToolsDatum.map((data, idx) => (
            <>
              <div className="MtFirstBox" style={{ background: data.color }}>
                <div className="MTBoxSize">
                  <div className="MTMainHeading">{data.title}</div>
                  <div className="MTSubHeading">{data.description}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MakertTools;
