import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div id="app-body" className="row">
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          <h3>Project Name</h3>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <div id="lightBody">
          <h3>Description</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody"></div>
      </div>
      <div className="bg-light col-sm-6 col-md-7"></div>
    </div>
  );
};

export default Projects;
