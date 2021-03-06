import React from "react";
import "./skills.css";
import { Table } from "react-bootstrap";

const Skills = () => {

  const skillsAndProficiency: any[] = [
    {
      skill: "C#"
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
                href="https://www.youracclaim.com/earner/earned/badge/73863f22-fcbf-488d-9c67-3e1c7b5f9fa2"
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
                href="https://www.youracclaim.com/earner/earned/badge/391bf600-3281-4794-b48d-e76df07e0481"
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
                href="https://www.youracclaim.com/earner/earned/badge/e339bcdd-826a-4420-af8c-50eeb0ca546e"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Certified: Power Platform Fundamentals
              </a>
            </td>
            <td>Microsoft</td>
            <td>October 2020</td>
          </tr>
          <tr>
          <td>
              <a
                className="cert-link"
                href="https://www.youracclaim.com/badges/8cb18fce-b55f-406b-98b2-721f189c4caf/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Certified: Azure Developer Associate
              </a>
            </td>
            <td>Microsoft</td>
            <td>December 2020</td>
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
