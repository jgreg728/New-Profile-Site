import React from "react";

const Card = props => {
  console.log(props);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
    </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  )
}

export default Card