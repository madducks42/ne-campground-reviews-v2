import React from "react";
import { Link } from "react-router-dom";

import { getTileImage } from "../utilities/getTileImage"

const CampgroundTile = (props) => {

const tileImage = getTileImage(props.name)

  return (
    <div className="mr-2 ml-2 mt-2 mb-2">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={tileImage} alt="Campground" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="card-title has-text-centered">
                <Link to={`/campgrounds/${props.id}`}>{props.name}</Link>
              </p>
              <p className="subtitle is-6 has-text-centered">{props.location}</p>
            </div>
          </div>
          <div className="content has-text-centered">
            <p>{props.caption}</p>
            < br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundTile;
