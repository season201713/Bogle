import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
//import timerReducert from "../../reducer/timerReducer";

const BoggleHeader = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="/">Boggle</NavbarBrand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="timer">
          Time: {("0" + Math.floor(120 / 60).toString()).slice(-2)}:
          {("0" + (120 - Math.floor(120 / 60) * 60).toString()).slice(-2)}
        </Navbar.Text>
        <Navbar.Text>Score: 100</Navbar.Text>
      </Navbar.Collapse>
      <NavbarToggle />
    </Navbar>
  );
};

export default BoggleHeader;
