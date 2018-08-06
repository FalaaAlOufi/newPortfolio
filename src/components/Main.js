import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import contact from "./contact";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={contact} />
    </Switch>
  </main>
);

export default Main;
