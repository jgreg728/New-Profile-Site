import React, { Component } from "react";
import "./header.css";
import {Navbar,Nav} from "react-bootstrap";

class Header extends Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="./Pages/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }  
}

export default Header;