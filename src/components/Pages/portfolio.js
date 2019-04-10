import React, { Component } from "react";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import { Link } from 'react-router-dom';
import { Navbar, Card, Image, Grid, Row, Button, Form } from "react-bootstrap";
import "../../App";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
          <Navbar.Brand href="/">John's Portfolio</Navbar.Brand>
        <div>
          <div>
            <h2>
              <strong>Portfolio</strong>
            </h2>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary"><Link to="https://lit-river-69697.herokuapp.com">Duly Noted: A Note Taking App</Link></Button>
              </Card.Body>
            </Card>;
        </div>
        </div>

      </Wrapper>
    )
  }
}

export default Portfolio;