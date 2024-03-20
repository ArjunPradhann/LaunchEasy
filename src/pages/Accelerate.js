import React from "react";

function Accelerate() {
  const AccelerateData = [
    {
      number: "160%",
      title: "Increase in revenue generated for your business",
    },
    { number: "$60K", title: "Saved on annual marketing expenditure" },
    { number: "12", title: "hours saved on marketing efforts weekly" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          fontSize: "48px",
          fontWeight: 400,
          lineHeight: "56px",
          letterSpacing: "-0.02em",
          width: "50%",
        }}
      >
        Accelerate growth. Maximize savings. Reduce efforts.
      </div>
      <div style={{ display: "flex", width: "50%", gap: "24px" }}>
        {AccelerateData.map((datum, idx) => (
          <>
            <div
              style={{
                border: "1px solid #D0E2FF",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "64px",
                  fontWeight: "200",
                  color: "#393939",
                  marginBottom: "16px",
                }}
              >
                {datum.number}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#6F6F6F",
                }}
              >
                {datum.title}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Accelerate;
