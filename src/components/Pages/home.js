import React from "react";
import Header from "../Parts/Header/Header";
import Footer from "../Parts/Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";
import "../../App";
import {Navbar} from "react-bootstrap";

const Home = (props) => {

    return (
    <Wrapper>
      <Header>
      <Navbar.Brand href="/">John Gregorio's Official Page</Navbar.Brand>
      </Header>
        <div>
        <h1>John Gregorio's Offical Site</h1>
       
       <img src={require("../../assets/john_gregorio_profile_pic.png")} height="300px" width="300px" alt="John Gregorio"/>
        
        <h3>
        "A creative, forward-thinking and idea-driven worker, John is an experienced Marketing Specialist and a St. John’s University graduate with a Bachelor of Science (BS), focused in Marketing within the Peter J. Tobin College of Business. He built a career of working in the information technology and branding industries, combining his passion for consumer technology products with his passion for effective marketing strategies. Certified in full-stack coding from Rutgers' Coding Bootcamp Continuing Studies Program he is able to consistently visualize and build digital marketing concepts."
        </h3>
      </div>
      <Footer />
      </Wrapper>
  );
  
}

export default Home;