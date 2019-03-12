import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Portfolio from "./components/Pages/portfolio";
 
export default (
      <Router>
        <div>
          <Header/>
          <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} 
          />
          <Route exact path="/portfolio" component={Portfolio} />
          </switch>
        </div>
        <Home/>
        <Footer/>
      </Router>
)