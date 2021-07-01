import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomeContainer from "./home/HomeContainer"
import AboutUs from "./about/AboutUs";

import CamperContainer from "./camper/CamperContainer"
import UpdateModForm from "./camper/admin/UpdateModForm";
import NewModForm from "./camper/admin/NewModForm";
import DeleteModForm from "./camper/admin/DeleteModForm"

import CampgroundContainer from "./campgrounds/CampgroundContainer"
import NewCampgroundForm from "./admin/NewCampgroundForm";
import UpdateCampgroundForm from "./admin/UpdateCampgroundForm";
import DestroyCampground from "./admin/DestroyCampground";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/campgrounds" component={HomeContainer} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/camper" component={CamperContainer} />
        <Route exact path="/mods/new" component={NewModForm} />
        <Route exact path="/mods/:id/update" component={UpdateModForm} />
        <Route exact path="/mods/:id/destroy" component={DeleteModForm} />
        <Route exact path="/campgrounds/new" component={NewCampgroundForm} />
        <Route
          exact
          path="/campgrounds/:id"
          component={CampgroundContainer}
        />
        <Route
          exact
          path="/campgrounds/:id/destroy"
          component={DestroyCampground}
        />
        <Route
          exact
          path="/campgrounds/:id/update"
          component={UpdateCampgroundForm}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;