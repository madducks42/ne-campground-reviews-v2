import React, { useState, useEffect } from "react";

import CamperInfo from "./CamperInfo";
import ModsContainer from "./ModsContainer";
import CamperMisc from "./CamperMisc"

const CamperContainer = () => {

  const [mods, setMods] = useState([]);
  const [userIsAdmin, setUserIsAdmin] = useState({});

  useEffect(() => {
    fetch("/api/v1/mods")
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setMods(body);
        if (body[0].userIsAdmin) {
          setUserIsAdmin(body[0].userIsAdmin);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div className="container camper-mods-style mt-6">
      <CamperInfo />
      <ModsContainer />
      <CamperMisc />
    </div>
  );
};

export default CamperContainer;
