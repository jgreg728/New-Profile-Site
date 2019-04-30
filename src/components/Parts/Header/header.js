import React, { Component } from "react";
import "./style.css";
import {Navbar,Nav} from "react-bootstrap";

class Header extends Component {
  render () {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>John Gregorio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" text-align="right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }  
}

export default Header;