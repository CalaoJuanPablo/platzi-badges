import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, BadgeNew, BadgeEdit, Badges, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/edit/:badgeId" component={BadgeEdit} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
