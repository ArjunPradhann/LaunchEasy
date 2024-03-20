import React from "react";

function Button() {
  return (
    <div
      style={{
        background: "black",
        height: "48px",
        fontFamily: "Helvetica",
        fontSize: "1rem",
        fontWeight: "700",
        color: "white",
        borderRadius: "8px",
        width: "10.625rem",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Join the waitlist
    </div>
  );
}

export default Button;
