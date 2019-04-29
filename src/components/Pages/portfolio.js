import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import { Link } from 'react-router-dom';
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import note from "../../assets/notepad.png";
import train from "../../assets/train_clock.png";
import plate from "../../assets/rate_my_plate.png";
import smash from "../../assets/smash_logo.png";
import "../../App";

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <h1>
          Portfolio
            </h1>

        <Container>
          <Row>
            <Col md={2}>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={note} width="275px" height="275px" />
                <Card.Body>
                  <Card.Title>Note Taker</Card.Title>
                  <Card.Text>
                    Utilizes mySQL database to allow users to write down and save personal notes, as well as delete previously made notes.
                </Card.Text>
                  <Button variant="primary"><a href="https://lit-river-69697.herokuapp.com">Enter</a></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={train} width="300px" height="300px" />
                <Card.Body>
                  <Card.Title>Train Schedule App</Card.Title>
                  <Card.Text>
                    Built around Firebase database tool to allow users to create a working train timetable, complete with functions to calculate time remaining and time of arrival.
                </Card.Text>
                  <Button variant="primary"><a href="https://jgreg728.github.io/Train-Schedule/">Enter</a></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col md={2}>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={plate} width="300px" height="300px"/>
                <Card.Body>
                  <Card.Title>"Rate My Plate" Food Search App</Card.Title>
                  <Card.Text>
                  Utilizes Firebase database tool to allow users to search, review and locate a variety of restaurants by specific foods and dishes. Users may also leave reviews, and rate specific dishes based on a 5-point scoring system
                  </Card.Text>
                  <Button variant="primary"><a href="https://jgreg728.github.io/Rutgers-Group-Project-1/">Enter</a></Button>
                </Card.Body>

              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={smash} width="300px" height="300px"/>
                <Card.Body>
                  <Card.Title>Smash Bros. Ultimate Memory Game</Card.Title>
                  <Card.Text>
                    Based on the popular video game, Super Smash Bros. Ultimate, this memory game has the users clicking chracters they have not already picked during the game. First repeat character chosen is GAME OVER
                  </Card.Text>
                  <Button variant="primary"><a href="https://jgreg728.github.io/Click-Game-2/">Enter</a></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={2}>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default Portfolio;