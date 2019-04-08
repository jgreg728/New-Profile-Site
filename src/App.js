import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Header from "./components/Parts/Header/Header";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
import Footer from "./components/Parts/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import './App.css'

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Route>

        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App;