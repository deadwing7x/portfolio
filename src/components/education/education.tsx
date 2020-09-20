import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div id="app-body" className="row">
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          <h3>Education Level</h3>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <h3>Institution</h3>
      </div>
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          <li className="edu-list">
            <p id="level">College</p>
          </li>
          <br />
          <br />
          <br />
          <li className="edu-list">
            <p id="level">Higher Secondary</p>
          </li>
          <br />
          <br />
          <li className="edu-list">
            <p id="level">Secondary</p>
          </li>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <li className="edu-list">
          <p id="level">Lovely Professional University</p>
          <p id="level">
            Bachelors of Technology, Computer Science Engineering (2016 - 2020)
          </p>
        </li>
        <li className="edu-list">
          <p id="level">Aditya Academy Senior Secondary</p>
          <p id="level">CBSE (2016)</p>
        </li>
        <li className="edu-list">
          <p id="level">Stepping Stone Model School</p>
          <p id="level">ICSE (2014)</p>
        </li>
      </div>
    </div>
  );
};

export default Education;
