import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand title="About Me" href="/">
        Anubhav - Portfolio
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
