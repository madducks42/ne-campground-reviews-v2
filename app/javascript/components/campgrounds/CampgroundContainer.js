import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import ReviewTile from "./ReviewTile";
import MapTile from "./MapTile";
import AmenitiesTile from "./AmenitiesTile";
// import ErrorList from "../utilities/ErrorList";

import { getCampgroundData } from "./fetches/CampgroundData";

const CampgroundContainer = (props) => {
  const id = props.match.params.id;

  const [campground, setCampground] = useState({});
  // const [userIsAdmin, setUserIsAdmin] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  // const [errors, setErrors] = useState({});

  useEffect(() => {
    getCampgroundData(id).then((body) => {
      setCampground(body);
      // setUserIsAdmin(body.userIsAdmin);
      if (body.currentUser != null) {
        setCurrentUser(body.currentUser);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="mb-6">
        <h1 className="has-text-centered is-size-1 has-text-weight-semibold font-red mb-6 mt-6">
          {campground.name}
        </h1>
        <ImageSlider slides={SliderData} />
        <div className="columns">
          <div className="column">
            <ReviewTile
              key={campground.id}
              campgroundLink={campground.campground_link}
              name={campground.name}
              review={campground.review}
              location={campground.location}
            />
          </div>
        </div>
        <div className="columns info-container">
          <div className="column">
            <div className="amenities-container">
              <div>
                <AmenitiesTile
                  key={campground.id}
                  campgroundLink={campground.campground_link}
                  dogsAllowed={campground.dogs_allowed}
                  electricHookups={campground.electronic_hookups}
                  waterHookups={campground.water_hookups}
                  potableWater={campground.potable_water}
                  dumpStation={campground.dump_station}
                  bathrooms={campground.bathrooms}
                  showers={campground.showers}
                />
              </div>
            </div>
          </div>
          <div className=" column map-container">
            <MapTile />
          </div>
        </div>
        {currentUser.role === "admin" && (
          <div className="columns admin-flex">
            <Link
              className="admin-link"
              to={`/campgrounds/${campground.id}/update`}
            >
              Update Campground
            </Link>
            <Link
              className="admin-link"
              to={`/campgrounds/${campground.id}/destroy`}
            >
              Delete Campground
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampgroundContainer;
