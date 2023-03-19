import React from "react";
import { Feature } from "../../components";
import { gift, dustpan } from "../whatAnyworka/imports";

import "./features.css";

const FeaturesData = [
  {
    title: "Growth-oriented",
    text: " We believe in the power of feedback and encourage a mindset of continuous learning and growth",
    pic: gift,
  },
  {
    title: "Thoughtful",
    text: "We thoroughly consider the consequences of our work and welcome diversity of thought.",
    pic: dustpan,
  },
];

const Features = () => {
  return (
    <div className="anyworka__features section__padding" id="features">
      <div className="anyworka__features-heading">
        <h1 className="gradient__text">
          The Future is now and you just need to realize it. step into future
          today & make it happen 
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="anyworka__features-container">
        {FeaturesData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            pic={item.pic}
            
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
