import React from "react";

const Button = ({
  width,
  height,
  bg,
  textColor,
  heading,
  isBorder,
  onclick,
}) => {
  const borderColor = textColor ? "#ffffff" : "#000000";
  return (
    <>
      <button
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: bg ? "#DB4444" : "transparent",
          color: textColor ? "#ffffff" : "#000000",
          border: isBorder ? `1px solid ${borderColor}` : 0,
          borderRadius: "4px",
          fontSize: "16px",
          fontWeight: 500,
        }}
        onClick={onclick}
      >
        {heading}
      </button>
    </>
  );
};

export default Button;
