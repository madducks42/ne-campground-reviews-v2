import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomeContainer from "./home/HomeContainer"
import AboutUs from "./about/AboutUs";
import CamperContainer from "./camper/CamperContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/camper" component={CamperContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;