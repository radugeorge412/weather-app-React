import React from "react";
import "../styles/city.css";

function InfoCard({ info, img }) {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <span className="info">{info}</span>
    </div>
  );
}

export default InfoCard;
