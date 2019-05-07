import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import "../../App";
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import stJohns from "../../assets/st_johns_logo.png"
import pershing from "../../assets/pershing_logo.png"
import rutgers from "../../assets/rutgers_bootcamp_logo.png"
import shi from "../../assets/shi_logo.png"
import frontEnd from "../../assets/html_css_js_logo.png"
import macOS from "../../assets/macOS_logo.png"
import office from "../../assets/MSoffice_logo.png"
import mySQL from "../../assets/mysql_logo.png"
import node from "../../assets/node_logo.png"
import firebase from "../../assets/firebase_logo.png"
import Container from 'react-bootstrap/Container';

class About extends Component {
  render() {
    return (
      <Wrapper>
        <h1>About Me...</h1>
        <Container>

          <Row>
            <Col md={6}>
          <Col className="shiPic" md={3} sm={1}>
              <Image src={shi} height="150px" width="220px" rounded />
            </Col>
          <Col className="stJohnsPic" md={3} sm={1}>
              <Image src={stJohns} height="150px" width="150px" rounded />
            </Col>
            </Col>
            <Col md={6}>
              <h2>
                <p>
                  I received his B.S. in Marketing at St. John’s University in May 2012. Currently, I am employed in the Marketing Events department of the technology licensing, reselling and IT support company, SHI International, which has allowed me to sharpen both my analytical skills as well as give me valuable experience in branding and general marketing.
        </p>
              </h2>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h2>
                <p>
                  Prior to my graduation, I was fortunate enough to enter an internship at Pershing, a financial services firm, working in their branding, advertising, and customer communications division.  It was here that I was involved in many projects and global meetings, including updating the design of the company’s website. In addition, during my senior year, one of my courses had me participate in a real marketing project that involved the development of a full marketing plan. This included collaboration with an external organization and an intermediate school, all to help that school win a grant to help enhance its campus.
            </p>
              </h2>
            </Col>
            <Col className="pershing" md={6} >
              <Image src={pershing} height="300px" width="500px" rounded />
            </Col>
          </Row>

          <Row>
          <Col className="rutgers" md={6} >
              <Image src={rutgers} height="50px" width="500px" rounded />
            </Col>
            <Col md={6}>
              <h2>
                <p>
                  In July of 2018, I took up a bootcamp course for full-stack coding within Rutgers' continuing studies program. During the 6 months of the course, I became educated on the ins and outs of both front-end and back-end coding. Going through languages such as HTML, CSS, Javascript, jQuery, and React, I accrued a portfolio of interesting and creative works from the assignments given, as you will see in the Portfolio page of this site. I  graduated the program in February 2019, certified in completing Rutgers Coding Bootcamp.
               </p>
              </h2>
            </Col>
          </Row>

          <h1 className="skills">Proficient In...</h1>
<br>
</br>
          {/* <ul className="skillsList">
            <li>Front-End Coding: HTML, CSS, JavaScript, jQuery</li>
            <li>Back-End Coding: Firebase, Mongoose, Node, mySQL</li>
            <li>Windows - Microsoft Office: Excel, Powerpoint, Word, </li>
            <li>macOS - ‘iWork” Suite: Numbers, Keynote, Pages</li>
          </ul> */}

          <Row>
          <Col md={3}>
            </Col>
            <Col md={6}>
            <Image src={frontEnd} height="150px" width="400px" rounded />
            </Col>
            <Col md={3}>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
            </Col>
            <Col md={6}>
            <Image src={mySQL} height="200px" width="200px" rounded />
            <br></br>
            <Image src={node} height="100px" width="200px" rounded />
            <br></br>
            <br></br>
            <Image src={firebase} height="100px" width="350px" rounded />
            </Col>
            <Col md={3}>
            </Col>
          </Row>
<br></br>
<br></br>
<br></br>
<br></br>
          <Row>
            <Col md={3}>
            </Col>
            <Col md={6}>
            <Image src={office} height="300px" width="500px" rounded />
            <br></br>
            <br></br>
            <Image src={macOS} height="300px" width="300px" rounded />
            </Col>
            <Col md={3}>
            </Col>
          </Row>

        </Container>
      </Wrapper>
    );
  }
}

export default About;