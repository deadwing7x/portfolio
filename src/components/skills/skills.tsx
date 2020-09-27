import React from "react";
import "./skills.css";
import { ProgressBar, Table } from "react-bootstrap";

const Skills = () => {

  const skillsAndProficiency: any[] = [
    {
      skill: "C++",
      proficiency: 70,
    },
    {
      skill: "C#",
      proficiency: 65,
    },
    {
      skill: "Angular",
      proficiency: 60,
    },
    {
      skill: "React",
      proficiency: 55,
    },
    {
      skill: "TypeScript",
      proficiency: 60,
    },
    {
      skill: "JavaScript",
      proficiency: 60,
    },
    {
      skill: "HTML",
      proficiency: 60,
    },
    {
      skill: "CSS",
      proficiency: 55,
    },
    {
      skill: "Microsoft Azure",
      proficiency: 50,
    },
    {
      skill: "SQL Server",
      proficiency: 50,
    },
  ];

  return (
    <div id="app-body" className="row">
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          <h3>Skill</h3>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <div id="lightBody">
          <h3>Proficiency</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-5">
        <div id="darkBody">
          {skillsAndProficiency.map((x) => (
            <li key={x.skill}>{x.skill}</li>
          ))}
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <div id="skillsLevel">
          {skillsAndProficiency.map((x) => (
            <li key={x.skill} className="skillsBar" style={{ paddingBottom: "8px" }}>
              <ProgressBar animated now={x.proficiency} />
            </li>
          ))}
        </div>
      </div>
      <Table id="cert-table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Certification Name</th>
            <th>Certified By</th>
            <th>Issued On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certified System Architect</td>
            <td>Pega Systems</td>
            <td>June 2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="cert-link"
                href="https://mcptnc.microsoft.com/transcript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Querying Data with Transact - SQL
              </a>
            </td>
            <td>Microsoft</td>
            <td>November 2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="cert-link"
                href="https://mcptnc.microsoft.com/transcript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analyzing and Visualizing Data with Microsoft Power BI
              </a>
            </td>
            <td>Microsoft</td>
            <td>December 2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="cert-link"
                href="https://www.hackerrank.com/certificates/7b183e0c1fd7"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript (Basic)
              </a>
            </td>
            <td>Hacker Rank</td>
            <td>August 2020</td>
          </tr>
          <tr>
            <td>
              <a
                className="cert-link"
                href="https://www.efset.org/cert/kD4kXG"
                target="_blank"
                rel="noopener noreferrer"
              >
                EF SET Standard English Test
              </a>
            </td>
            <td>EF SET</td>
            <td>September 2020</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Skills;
