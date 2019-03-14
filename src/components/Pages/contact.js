import React from "react";
import Header from "../Parts/Header/header";
import Form from "../Parts/Form/form";
import Footer from "../Parts/Footer/footer";
import Wrapper from "../Wrapper/wrapper";
import { Switch } from "react-router-dom";


const Contact = (props) => {
  console.log(props);
  return (
<Wrapper>
  <Header>
    Contact John
  </Header>
    <Form>
      
    </Form>
    <Footer>
    
    </Footer> 
  </Wrapper>
  );
};

export default Contact;