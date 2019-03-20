import React from "react";
import { Router, Route } from "react-router";
import Home from "../components/Pages/home"
import About from "../components/Pages/about"
import Contact from "../components/Pages/contact"
import Portfolio from "../components/Pages/portfolio"
import App from "../App"

export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>
)