import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "../pages/Layout";
import Featured from "../pages/Featured";
import About  from "../pages/About";
import Archives from "../pages/Archives";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="archives(/:article)" component={Archives}></Route>
    </Route>
  </Router>,
  app);
