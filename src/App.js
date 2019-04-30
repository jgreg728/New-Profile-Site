import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/home";
import Header from "./components/Parts/Header/header";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Portfolio from "./components/Pages/portfolio";
import Footer from "./components/Parts/Footer/footer";
import './App.css'

class App extends Component {
  render() {
      return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
  </Router>
  )
  }
}

export default App;