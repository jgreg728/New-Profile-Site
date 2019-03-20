import React from "react";
import { IndexRoute, Router, Route } from "react-router";
import App from "./App"

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)