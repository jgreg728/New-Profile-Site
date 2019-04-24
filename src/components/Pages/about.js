import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import "../../App";
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

class About extends Component {
  render() {
    return (
      <Wrapper>
        <h1>About John...</h1>
        <Container>

          <Row>
            <Col md={6}>
            <Image src="../../assets/st_johns_logo.png" />
            </Col>
            <Col md={6}>
              <h2>
                <p>
                  John received his B.S. in Marketing at St. John’s University in May 2012. Currently, he is employed in the Marketing Events department of the technology licensing, reselling and IT support company, SHI International,which has allowed him to sharpen both his analytical skills as well as give him valuable experience in branding and general marketing.
        </p>
              </h2>
            </Col>
          </Row>

          <Row>
            
            <Col md={6}>
              <h2>
                <p>
                  Prior to his graduation, he was fortunate enough to enter an internship at Pershing, a financial services firm, working in their branding, advertising, and customer communications division.  It was here that I was involved in many projects and global meetings, including updating the design of the company’s website. In addition, during my senior year, one of my courses had me participate in a real marketing project that involved the development of a full marketing plan. This included collaboration with an external organization and an intermediate school, to help that school win a grant to help enhance its campus.
            </p>
              </h2>
            </Col>
            <Col md={6}>
            <Image src="../../assets/pershing_logo.png" />
            </Col>
          </Row>

          <Row>
          <Col md={6}>
            <Image src="../../assets/rutgers_bootcamp_logo.png" />
            </Col>
            <Col>
              <h2>
                <p>
                  In July of 2018, John took up a bootcamp course for full-stack coding within Rutgers' continuing studies program. During the 6 months of the course, he became educated on the ins and outs of both front-end and back-end coding. Going through languages such as HTML, CSS, Javascript, jQuery, and React, John accured a portfolio of interesting and creative works from the assignments given, as you will see in the Portfolio page of this site. John eventually graduated the program, certified in completing Rutgers Coding Bootcamp.
               </p>
              </h2>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default About;