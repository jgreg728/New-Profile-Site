import React from "react";
import Header from "../Header/header";
import Form from "../Form/form";
import Footer from "../Footer/footer";
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