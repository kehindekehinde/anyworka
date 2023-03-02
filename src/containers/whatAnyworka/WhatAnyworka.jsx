import React from "react";
import { Feature } from "../../components";
import { gift, dustpan } from "./imports";

import "./whatAnyworka.css";

const WhatAnyworka = () => {
  return (
    <div
      className="anyworka__whatanyworka section__margin"
      id="whatanyworkaNAv"
    >
      <div className="anyworka__whatanyworka-feature">
        <Feature
          pic={""}
          title="What is Anyworka"
          text="Cleaning Services, House and office cleaning servicesHouse and office cleaning servicesHouse and office cleaning servicesHouse and office cleaning services"
        />
      </div>
      <div className="anyworka__whatanyworka-heading">
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>uuuu uuuuuuuuu uuuuuuuuuuu </p>
      </div>
      <div className="anyworka__whatanyworka-container">
        <Feature
          pic={gift}
          title="Gift and surpries"
          text="Cleaning Services, House and office cleaning services"
        />
        <Feature
          pic={dustpan}
          title="Event Planning"
          text="Make your loved ones feel special"
        />
        <Feature
          pic={dustpan}
          title="Capentry"
          text="Hire a capenter for your furniture"
        />
        <Feature
          pic={dustpan}
          title="Gift and surpries"
          text="Cleaning Services, House and office cleaning services"
        />
        <Feature
          pic={dustpan}
          title="Event Planning"
          text="Make your loved ones feel special"
        />
        <Feature
          pic={dustpan}
          title="Capentry"
          text="Hire a capenter for your furniture"
        />
      </div>
    </div>
  );
};

export default WhatAnyworka;
