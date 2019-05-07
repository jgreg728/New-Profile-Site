import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import "../../App";
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import john from '../../assets/john_gregorio_profile_pic.png'
import Container from 'react-bootstrap/Container';


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>John Gregorio's Official Page</h1>
        <Container>
          <Row>
            <Col className="profilePicture" md={4} sm={6}>
              <Image src={john} height="300px" width="300" rounded />
            </Col>

            <Col lg={8} md={6} sm={12}>
              <h3>

                A creative, forward-thinking and idea-driven worker, I am an experienced Marketing Specialist and a St. John’s University graduate with a Bachelor of Science (BS), focused in Marketing within the Peter J. Tobin College of Business. I built a career of working in the information technology and branding industries, combining my passion for consumer technology products with my passion for effective marketing strategies. Certified in full-stack coding from Rutgers' Coding Bootcamp Continuing Studies Program, I have been able to consistently visualize and build digital marketing concepts.
            </h3>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;