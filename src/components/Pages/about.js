import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "../../App";
import { Navbar, Card, Image, Grid, Row, Button, Form } from "react-bootstrap";

class About extends Component {
  render() {
    return (
    <Wrapper>
        <Navbar.Brand href="/">About John...</Navbar.Brand>
      <div>
        {/* ADD SELF IMAGE HERE */}
        <h2>
          <p>
            John received his B.S. in Marketing at St. John’s University in May 2012. Currently, he is employed in the Marketing Events department of the technology licensing, reselling and IT support company, SHI International,which has allowed him to sharpen both his analytical skills as well as give him valuable experience in branding and general marketing.
        </p>
          <p>
            Prior to his graduation, he was fortunate enough to enter an internship at Pershing, a financial services firm, working in their branding, advertising, and customer communications division.  It was here that I was involved in many projects and global meetings, including updating the design of the company’s website. In addition, during my senior year, one of my courses had me participate in a real marketing project that involved the development of a full marketing plan. This included collaboration with an external organization and an intermediate school, to help that school win a grant to help enhance its campus.
          </p>
          <p>
            In July of 2018, John took up a bootcamp course for full-stack coding within Rutgers' continuing studies program. During the 6 months of the course, he became educated on the ins and outs of both front-end and back-end coding. Going through languages such as HTML, CSS, Javascript, jQuery, and React, John accured a portfolio of interesting and creative works from the assignments given, as you will see in the Portfolio page of this site. John eventually graduated the program, certified in completing Rutgers Coding Bootcamp.
        </p>
        </h2>
      </div>
      </Wrapper>
    );
  }
}

export default About;