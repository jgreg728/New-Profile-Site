import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/home";
import Header from "./components/Parts/Header/header";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Portfolio from "./components/Pages/portfolio";
import Footer from "./components/Parts/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
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