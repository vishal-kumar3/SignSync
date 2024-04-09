import React from "react";
import "../styles/Spinner.css";

const Spinner = ({ width, height }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "auto",
        display: "block",
      }}
      className="lds-hourglass"
    ></div>
  );
};

export default Spinner;
