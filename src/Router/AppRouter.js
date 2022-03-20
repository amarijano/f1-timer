import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Season2022, Races, RaceInfo, Homepage } from "src/pages";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/season2022">
          <Season2022 />
        </Route>
        <Route exact path="/races">
          <Races />
        </Route>
        <Route exact path="/races/:raceNameId">
          <RaceInfo />
        </Route>
        <Route path="*">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
