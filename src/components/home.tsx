import React from "react";
import "./home.css";
import DownloadLink from "react-download-link";
import { Icon } from "office-ui-fabric-react/lib/Icon";

const FolderIcon = () => (
  <Icon
    iconName="DownloadDocument"
    className="ms-IconDocument"
    style={{ fontSize: "xx-large" }}
  />
);

export default class Home extends React.Component {
  render() {
    return (
      <div id="home" className="row">
        <div className="bg-dark col-sm-6 col-md-5">
          <div id="darkBody"><h3>Anubhav</h3></div>
        </div>
        <div className="bg-light col-sm-6 col-md-7"><h3>Sarkar</h3></div>
        <div id="desc" className="col-md-12">
          Hi. I am a Full Stack Web Developer currently working at MAQ Software,
          Mumbai. I love building websites and web apps. I am currently focused on
          Full - Stack development using .NET and React/ Angular.
        </div>
        <div id="resume" className="col-md-12">
          <h4 title="Click on the icon below to download">
            Download Resume:
          </h4>
          <div title="Click to download">
            <DownloadLink
              label={<FolderIcon />}
              filename="../Anubhav-Resume.pdf"
            />
          </div>
        </div>
      </div>
    );
  }
}
