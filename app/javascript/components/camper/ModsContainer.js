import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModsContainer = (props) => {
  const [visibility, setVisibility] = useState({
    mattressUpgrade: false,
    speakerUpgrade: false,
  });

  const onClickHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    setVisibility({
      ...visibility,
      [id]: !visibility[id],
    });
  };

  const modSections = props.mods.map((mod) => {
    if (visibility[mod.id]) {
      return (
        <div className="camper-mods-section" key={mod.id}>
          <div className="flex-row">
            <h4 className="mods-title">{mod.title}</h4>
            <i
              type="input"
              id={mod.id}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex="0"
              className="fas fa-minus-square mods-button"
            ></i>
          </div>
          <div dangerouslySetInnerHTML={{ __html: mod.body }}></div>
          {props.userIsAdmin === true && (
            <div className="columns devise-flex">
              <Link
                className="button devise-buttons"
                to={`/mods/${mod.id}/update`}
              >
                Update Mod
              </Link>
              <Link
                className="button devise-buttons"
                to={`/mods/${mod.id}/destroy`}
              >
                Delete Mod
              </Link>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="camper-mods-section" key={mod.id}>
          <div className="flex-row">
            <h4 className="mods-title">{mod.title}</h4>
            <i
              type="input"
              id={mod.id}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex="0"
              className="fas fa-plus-square mods-button"
            ></i>
          </div>
        </div>
      );
    }
  });
  return (
    <div>
      <h1 className="is-size-1 font-red has-text-centered has-text-weight-semibold mt-6">
        Camper Modifications
      </h1>
      <p className="is-size-7 mt-4">
        As much as we love the Wolf Pup (aka the &apos;Gray Ghost&apos;), there
        are some things that we tweaked...
      </p>
      {props.userIsAdmin === true && (
          <div className="columns devise-flex mt-6">
            <Link
              className="button devise-buttons"
              to="/mods/new"
            >
              New Camper Mod
            </Link>
          </div>
        )}
      <div className="camper-mods-container"> {modSections}</div>
    </div>
  );
};

export default ModsContainer;
