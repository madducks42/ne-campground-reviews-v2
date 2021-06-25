import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomeContainer from "./home/HomeContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;