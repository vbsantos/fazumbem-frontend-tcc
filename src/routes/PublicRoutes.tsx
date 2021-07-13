import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Public/Home";
import Login from "../views/Public/Login";
import Register from "../views/Public/Register";
import Campaigns from "../views/Public/Campaigns";

export default function PublicRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/campaigns">
          <Campaigns />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
