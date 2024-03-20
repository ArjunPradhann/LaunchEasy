import React from "react";
import "../style/Header.css";
import Button from "../components/Button";

function Header() {
  const headers = [
    { title: "AI Tools", icon: "/Dropdown.svg" },
    { title: "Product", icon: "/Dropdown.svg" },
    { title: "Resources", icon: "/Dropdown.svg" },
    { title: "Pricing", icon: "" },
    { title: "Contact Us", icon: "" },
  ];
  return (
    <div className="HeaderMainDiv">
      <div>
        {" "}
        <img src="/companyLogo.svg" alt="companyLogo" />
      </div>
      <div className="HeaderLeftSide">
        {headers.map((data, idx) => (
          <div style={{ marginRight: "32px" }}>
            {data.title}
            {data.icon && (
              <img
                src={data.icon}
                alt="dropdown"
                style={{ marginLeft: "10px", marginBottom: "2px" }}
              />
            )}
          </div>
        ))}
        <Button />
      </div>
    </div>
  );
}

export default Header;
