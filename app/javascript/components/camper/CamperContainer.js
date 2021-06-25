import React from "react";

import CamperInfo from "./CamperInfo";
import ModsContainer from "./ModsContainer";
import CamperMisc from "./CamperMisc"

const CamperContainer = () => {
  return (
    <div className="container camper-mods-style">
      <CamperInfo />
      <ModsContainer />
      <CamperMisc />
    </div>
  );
};

export default CamperContainer;
