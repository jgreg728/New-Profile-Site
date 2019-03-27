import React from "react";
import Header from "../Parts/Header/header";
import Footer from "../Parts/Footer/footer";
import Wrapper from "../Wrapper/wrapper";
import { Link } from 'react-router-dom';
import {Navbar} from "react-bootstrap";

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

          <div>
            <ul>
              <li>
                <Link to="https://lit-river-69697.herokuapp.com">Duly Noted: A Note Taking App</Link>
              </li>
              <li>
                
                <href></href>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer>

      </Footer> 
  </Wrapper>
      )
    }
    
export default Portfolio;