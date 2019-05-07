import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import { Link } from 'react-router-dom';
import { Navbar, Card, Image, Grid, Row, Col, Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import note from "../../assets/note_icon.png";
import train from "../../assets/train_clock.jpg";
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
                <Card.Img variant="top" src={note} width="100px" height="250px" />
                <Card.Body>
                  <Card.Title>Note Taker</Card.Title>
                  <Card.Text>
                    Utilizes mySQL database to allow users to write down and save personal notes, as well as delete previously made notes. Database also allows saving of created notes.
                </Card.Text>
                  <Button variant="success" block><a href="https://lit-river-69697.herokuapp.com">Enter App</a></Button>
                  <Button variant="primary" block><a href="https://github.com/jgreg728/Note-Taker-Heroku-App">GitHub Repo</a></Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={train} width="405px" height="253px" />
                <Card.Body>
                  <Card.Title>Train Schedule App</Card.Title>
                  <Card.Text>
                    Built around Firebase database tool to allow users to create a working train timetable, complete with functions to calculate time remaining and time of arrival.
                </Card.Text>
                  <Button variant="success" block><a href="https://jgreg728.github.io/Train-Schedule/">Enter App</a></Button>
                  <Button variant="primary" block><a href="https://github.com/jgreg728/Train-Schedule">GitHub Repo</a></Button>
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
                <Card.Img variant="top" src={plate} width="200px" height="300px"/>
                <Card.Body>
                  <Card.Title>"Rate My Plate" Food Search App</Card.Title>
                  <Card.Text>
                  (GROUP PROJECT - Built the HTML scaffold; contributed to CSS styling; Handled Google Map API) Utilizes Firebase database tool to allow users to search, review and locate a variety of restaurants by specific dishes.
                  </Card.Text>
                  <Button variant="success" block><a href="https://jgreg728.github.io/Rutgers-Group-Project-1/">Enter App</a></Button>
                  <Button variant="primary" block><a href="https://github.com/jgreg728/Rutgers-Group-Project-1">GitHub Repo</a></Button>
                </Card.Body>

              </Card>
            </Col>

            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={smash} width="200px" height="300px"/>
                <Card.Body>
                  <Card.Title>Smash Bros. Ultimate Memory Game</Card.Title>
                  <Card.Text>
                    Based on the popular video game, Super Smash Bros. Ultimate, this memory game has the users clicking chracters they have not already picked during the game. First repeat character chosen is GAME OVER
                  </Card.Text>
                  <Button variant="success" block><a href="https://jgreg728.github.io/Click-Game-2/">Enter App</a></Button>
                  <Button variant="primary" block><a href="https://github.com/jgreg728/Click-Game-2">GitHub Repo</a></Button>
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