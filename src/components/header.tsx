import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/esm/Navbar";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand title="About Me" href="/">
        Anubhav - Portfolio
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item title="About Me">
              <Nav.Link className="nav-item" href="/">
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item title="Work Experience">
              <Nav.Link className="nav-item" href="/work-exp">
                Work Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item title="Education">
              <Nav.Link className="nav-item" href="/education">
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item title="Skills and Certifications">
              <Nav.Link className="nav-item" href="/skills">
                Skills and Certifications
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
