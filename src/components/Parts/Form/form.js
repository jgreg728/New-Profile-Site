import React from "react";
import Button from "../Button/button"

const Form = (props) => {
  console.log(props)

  return (
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Button>
  </Button>

</Form>
  )
}

export default Form;