import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div id="app-body" className="row">
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          <h3>Company</h3>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <div id="lightBody">
          <h3>Experience</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody"></div>
      </div>
      <div className="bg-light col-sm-6 col-md-7"></div>
    </div>
  );
};

export default Experience;
