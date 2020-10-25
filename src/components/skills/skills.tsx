import React from "react";
import "./skills.css";
import { Table } from "react-bootstrap";

const Skills = () => {

  const skillsAndProficiency: any[] = [
    {
      skill: "C++"
    },
    {
      skill: "C#"
    },
    {
      skill: "Angular"
    },
    {
      skill: "React"
    },
    {
      skill: "TypeScript"
    },
    {
      skill: "JavaScript"
    },
    {
      skill: "HTML"
    },
    {
      skill: "CSS"
    },
    {
      skill: "Microsoft Azure"
    },
    {
      skill: "SQL Server"
    },
  ];

  return (
    <div id="app-body" className="row">
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
          <tr>
            <td>
              <a
                className="cert-link"
                href="https://mcptnc.microsoft.com/transcript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Certified: Power Platform Fundamentals
              </a>
            </td>
            <td>Microsoft</td>
            <td>October 2020</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <div className="bg-dark col-sm-6 col-md-3">
        <div id="darkBody">
          <h3>Skills</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-3">
        <div id="darkBody">
          {skillsAndProficiency.map((x) => (
            <li key={x.skill}>{x.skill}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
