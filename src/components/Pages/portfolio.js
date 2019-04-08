import React from "react";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import Card from "../Parts/Card/Card"
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import "../../App";

const Portfolio = props => {
  console.log(props)

  return (
    <Wrapper>
      <Header>
        <Navbar.Brand href="/">John's Portfolio'</Navbar.Brand>
      </Header>
      <div>
        <div>
          <h2>
            <strong>Portfolio</strong>
          </h2>

          <Card>
            <Link to="https://lit-river-69697.herokuapp.com">Duly Noted: A Note Taking App</Link>
          </Card>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Portfolio;