import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { useSelector } from "react-redux";

const BoggleHeader = () => {
  const timer = useSelector(state => state.timerReducer);
  const counter = useSelector(state => state.counter);
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand href="/">Boggle</NavbarBrand>
      <NavbarToggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="timer">
          Time: {("0" + Math.floor(timer / 60).toString()).slice(-2)}:
          {("0" + (timer - Math.floor(timer / 60) * 60).toString()).slice(-2)}
        </Navbar.Text>
        <Navbar.Text>Score:{counter}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BoggleHeader;
