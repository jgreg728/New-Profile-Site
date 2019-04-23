import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "../../App";
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <h1>John Gregorio's Official Page</h1>
        <Container>
          <Row>
            <Col className="profilePicture" md={4} >
              <Image src="../../assets/john_gregorio_profile_pic.png" rounded />
            </Col>

            <Col md={8}>
              <h3>

                A creative, forward-thinking and idea-driven worker, John is an experienced Marketing Specialist and a St. John’s University graduate with a Bachelor of Science (BS), focused in Marketing within the Peter J. Tobin College of Business.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3>
                He built a career of working in the information technology and branding industries, combining his passion for consumer technology products with his passion for effective marketing strategies. Certified in full-stack coding from Rutgers' Coding Bootcamp Continuing Studies Program he is able to consistently visualize and build digital marketing concepts.
            </h3>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;