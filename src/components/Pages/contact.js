import React, { Component } from "react";
import Wrapper from "../Wrapper/wrapper";
import { Navbar, Card, Image, Grid, Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "../../App";

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <h1>
          Contact Me
        </h1>
      
      <Container>
        <Row>
          <Col md={3}>
          </Col>
          <Col lg={6} md={12} sm={3}>
          <Card style={{ width: '34rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Email:</strong> John.Gregorio7890@Gmail.com</ListGroup.Item>
            <ListGroup.Item><strong>LinkedIn: </strong><a className="linkedIn" href="https://www.linkedin.com/in/john-gregorio-a5989531/">https://www.linkedin.com/in/john-gregorio-a5989531/</a>
            </ListGroup.Item>
            <ListGroup.Item><strong>Mobile: </strong>(917) 273-0449</ListGroup.Item>
            <ListGroup.Item><strong>GitHub: </strong><a className="github"href="https://github.com/jgreg728">https://github.com/jgreg728</a>
            </ListGroup.Item>
          </ListGroup>
        </Card>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
<br></br>
        {/* <Row>
        <Col md={3}>
          </Col>
          <Col md={6}>
           <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Me</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
            </Button>
            
        </Form>
          </Col>

          <Col md={3}>
          </Col>
        </Row> */}
      </Container> 
    </Wrapper>
    )
  }
};

export default Contact;