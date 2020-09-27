import React from "react";
import "./sidenav.css";
import { Image, Nav } from "react-bootstrap";
import { Icon } from "office-ui-fabric-react/lib/Icon";

const MailIcon = () => <Icon iconName="Mail" className="ms-IconMail" />;
const PhoneIcon = () => <Icon iconName="CellPhone" className="ms-IconPhone" />;
const LocationIcon = () => <Icon iconName="POISolid" className="ms-IconLocation" />;
const WorkIcon = () => <Icon iconName="Work" className="ms-IconWork" />;

const SideNav = () => {
  return (
    <div>
      <Nav className="d-none d-md-block bg-light sidebar" id="sideNav">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Image
            id="profilePicture"
            src={require("../../profile.jpg")}
            thumbnail
            alt="Profile Picture"
          />
        </Nav.Item>
        <Nav.Item>
          <div id="contactInfo">
            <br />
            <h5>Anubhav Sarkar</h5>
            <span title="Email">
              <MailIcon /> anubhavsarkar7@gmail.com
            </span>
            <br />
            <span title="Mobile Phone">
              <PhoneIcon /> +91-7986671574
            </span>
            <br />
            <span>
              <WorkIcon /> MAQ Software
            </span>
            <br />
            <span>
              <LocationIcon /> Mumbai, MH, India
            </span>
          </div>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideNav;
