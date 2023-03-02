import React from "react";
import "./feature.css";
import { FaTimes } from "react-icons/fa";

const Feature = ({ title, text, pic }) => {
  return (
    <div className="anyworka__features-container__feature">
      <div className="anyworka__features-container__feature-title">
        <img src={pic} alt='' />
        <div className="bar" />
        <div className="flexing__h1_and_p">
          <h1>{title} </h1>
          <p>
            <FaTimes size="20" color="purple" />
          </p>
        </div>
      </div>
      <div className="anyworka__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
