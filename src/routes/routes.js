import React from 'react';
import { Router, Route } from 'react-router-dom'
 
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