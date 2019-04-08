import React from "react";
import Header from "../Parts/Header/Header";
import Form from "../Parts/Form/Form";
import Footer from "../Parts/Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import "../../App";




const Contact = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Header>
        Contact John
      </Header>
      <Form />
      <Footer />
    </Wrapper>
  );
};

export default Contact;