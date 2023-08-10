import React from "react";

const VerticalLine = ({ width, color, height, marginY, className }) => {
  return (
    <div
      className={`${width} ${color} ${height} ${marginY} ${className}`}
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay="200"
    ></div>
  );
};

export default VerticalLine;
