import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import "./home.css";
import Wrapper from "../Wrapper/wrapper.js";

const Home = (props) => {
  return (
    <Wrapper>
      <Header>

      </Header>
        <div>
        <h1>John Gregorio's Offical Site</h1>
        <img>
        {/* INSERT MY PHOTO HERE */}
        </img>
        <h3>
        "A creative, forward-thinking and idea-driven worker, John is an experienced Marketing Specialist and a St. John’s University graduate with a Bachelor of Science (BS), focused in Marketing within the Peter J. Tobin College of Business. He built a career of working in the information technology and branding industries, combining his passion for consumer technology products with his passion for effective marketing strategies. Certified in full-stack coding from Rutgers' Coding Bootcamp Continuing Studies Program he is able to consistently visualize and build digital marketing concepts."
        </h3>
      </div>
      <Footer>

      </Footer>
   </Wrapper>
  )
}

export default Home;