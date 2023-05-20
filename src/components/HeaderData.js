import React from "react";

const HeaderData = ({ icon, text, nums }) => {
  return (
    <div
      className="header_buttons"
      direction="row"
      style={{ border: "1px solid #d0cece", borderRadius: "10px" }}
    >
      <div
        style={{
          padding: "3px 7px",
          display: "flex",
          gap: "5px",
          flexDirection: "row",
        }}
      >
        {icon} &nbsp; {text}
      </div>

      {nums && (
        <div
          style={{
            padding: "4px 10px",
            borderLeft: "1px solid #d0cece",
            borderRadius: "0px 10px 10px 0px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {nums}
        </div>
      )}
    </div>
  );
};

export default HeaderData;
