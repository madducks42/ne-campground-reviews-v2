import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomeContainer from "./home/HomeContainer"
import AboutUs from "./about/AboutUs";
import CamperContainer from "./camper/CamperContainer"

import CampgroundContainer from "./campgrounds/CampgroundContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/campgrounds" component={HomeContainer} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/camper" component={CamperContainer} />
        <Route
          exact
          path="/campgrounds/:id"
          component={CampgroundContainer}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;