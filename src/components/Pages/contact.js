import React from "react";
import Header from "../Parts/Header/header";
import Form from "../Parts/Form/form";
import Footer from "../Parts/Footer/footer";
import Wrapper from "../Wrapper/wrapper";
import {Navbar} from "react-bootstrap";



const Contact = (props) => {
  console.log(props);
  return (
<Wrapper>
<Header>
      <Navbar.Brand href="/">Contact John</Navbar.Brand>
      </Header>
    <Form></Form>
    <Footer></Footer> 
  </Wrapper>
  );
};

export default Contact;