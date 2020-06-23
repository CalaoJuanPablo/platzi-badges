import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BadgeNew, Badges, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
