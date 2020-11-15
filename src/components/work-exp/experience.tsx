import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div id="app-body" className="row">
      <div className="bg-dark col-sm-3 col-md-2">
        <div id="darkBody">
          <h3>Company</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-3 col-md-3">
        <div id="darkBody">
          <h3>Designation</h3>
        </div>
      </div>
      <div className="bg-light col-sm-4 col-md-7">
        <div id="lightBody">
          <h3>Experience</h3>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-2">
        <div id="darkBody">
          <li className="work-list">
            <h6>MAQ Software</h6>
          </li>
        </div>
      </div>
      <div className="bg-dark col-sm-6 col-md-3">
        <div id="darkBody">
          <li className="work-list">
            <h6>Software Engineer 1 (Oct, 2020 - Present)</h6>
          </li>
        </div>
        <div id="darkBody">
          <li className="work-list">
            <h6>Software Developer Intern (Oct, 2019 - Sep, 2020)</h6>
          </li>
        </div>
      </div>
      <div className="bg-light col-sm-6 col-md-7">
        <div id="lightBody">
          <li>
            <b>Client - Project:</b> Collaborated with other developers to
            develop new features according to client requirements. Wrote
            well-tested code in C# and Angular JS for an ASP.NET Framwork Web
            App.
          </li>
          <br />
          <li>
            <b>Internal - Project:</b> Developed a web app from scratch using
            ASP.NET Core using C# for backend development and Angular 2+
            (TypeScript) for the front-end. The app was secured with Azure
            Active Directory authentication allowing only users within the
            organization access to the Portal. The portal is used daily by many
            users in the organization.
          </li>
          <br />
          <li>
            <b>Client - Project:</b> Implemented a custom people - picker
            component, with add and delete functionalities on a Dynamics 365
            portal using JavaScript, which allows the authenticated user to
            search for other users in his organization. The component
            authenticated the users on the basis of the MSAL library provided by
            Microsoft.
          </li>
          <br />
          <li>
            <b>Client - Project:</b> Worked closely with other developers to
            develop new features on a web app according to the requirements
            provided by the client. Performed unit testing on all the C# code
            that was developed by me, to provide clean and tested features. The
            web app uses ASP.NET Framework with C# for the backend and CSHTML
            and JavaScript for the front-end. Also racked up some experience of
            working with Azure Cosmos DB while working on the project.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Experience;
