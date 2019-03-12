import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import Header from "./components/Header/header";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Portfolio from "./components/Pages/portfolio";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
  )
  }
}

export default App;