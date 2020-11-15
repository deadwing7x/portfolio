import React from "react";
import "./sidenav.css";
import { Image, Nav } from "react-bootstrap";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import profilePicture from '../../profile.jpg';

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
            src={profilePicture}
            thumbnail
            alt="Profile Picture"
          />
        </Nav.Item>
        <Nav.Item>
          <div id="contactInfo">
            <br />
            <h5>Anubhav Sarkar</h5>
            <span title="Email">
              <MailIcon /><a id="email-links" href="mailto:anubhavsarkar7@gmail.com"> anubhavsarkar7@gmail.com</a>
            </span>
            <br />
            <span title="Mobile Phone">
              <PhoneIcon /><a id="call-links" href="tel:+91-7986671574"> +91-7986671574</a>
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
