import React, { Component } from "react";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import { Navbar, Card, Image, Grid, Row, Button, Form, ListGroup } from "react-bootstrap";
import "../../App";

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <h1>
          Contact John
        </h1>


        <Card style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: John.Gregorio@Gmail.com</ListGroup.Item>
            <ListGroup.Item>"Mobile: (917) 273-0449"</ListGroup.Item>
            <ListGroup.Item>Github: https://github.com/jgreg728</ListGroup.Item>
          </ListGroup>
        </Card>;

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
        </Form>;
    </Wrapper>
    )
  }
};

export default Contact;