import React from "react";
import "./home.css";
import { Icon } from "office-ui-fabric-react/lib/Icon";

const FolderIcon = () => (
  <Icon
    iconName="DownloadDocument"
    className="ms-IconDocument"
    style={{ fontSize: "xx-large" }}
  />
);
const LinkedInIcon = () => (
  <Icon
    iconName="LinkedInLogo"
    className="ms-IconLinkedIn"
    style={{ fontSize: "xx-large" }}
  />
);

export default class Home extends React.Component {
  private aboutMe: string =
    "Hi there, I am a Full Stack Web Developer currently working at MAQ Software, Mumbai. I love building websites and designing user interfaces. I am currently focused on Full - Stack development using ASP.NET with C# and React/ Angular with TypeScript.";

  render() {
    return (
      <div id="app-body" className="row">
        <div className="bg-dark col-sm-6 col-md-5">
          <div id="darkBody">
            <p className="name">Anubhav</p>
          </div>
        </div>
        <div className="bg-light col-sm-6 col-md-7">
          <div id="lightBody">
            <p className="name">Sarkar</p>
          </div>
        </div>
        <div id="desc" className="col-md-12">
          {this.aboutMe}
        </div>
        <div id="resume" className="col-md-12">
          <h4 title="Click on the icon below to download">Download Resume:</h4>
          <div>
            <a
              href="https://github.com/deadwing7x/portfolio/raw/master/src/Anubhav-Resume.PDF"
              target="_blank"
              rel="noopener noreferrer"
              title="Click to download"
              download
            >
              <FolderIcon />
            </a>
          </div>
        </div>
        <div id="links" className="col-md-12">
          <h4>LinkedIn and Github profiles: </h4>
          <a
            title="LinkedIn Profile"
            href="https://www.linkedin.com/in/anubhav-sarkar-52965786/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <LinkedInIcon />
          </a>
          <a
            title="Github Profile"
            href="https://github.com/deadwing7x"
            rel="noopener noreferrer"
            target="_blank"
            id="githubIcon"
          >
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}
