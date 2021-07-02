import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ImageSlider from "./ImageSlider";
import ReviewTile from "./ReviewTile";
import MapTile from "./MapTile";
import AmenitiesTile from "./AmenitiesTile";

import { getCampgroundData } from "./fetches/CampgroundData";

const CampgroundContainer = (props) => {
  const id = props.match.params.id;

  const [campground, setCampground] = useState({});
  const [userIsAdmin, setUserIsAdmin] = useState({});

  useEffect(() => {
    getCampgroundData(id).then((body) => {
      setCampground(body);
      setUserIsAdmin(body.userIsAdmin);
    });
  }, []);

  let sliderData = [];
  let i = 1;
  while (i <= campground.image_num) {
    sliderData.push({
      image: `https://ne-campground-reviews.s3.amazonaws.com/${campground.image_name}/${campground.image_name}-${i}.jpg`,
    });
    i++;
  }

  return (
    <div className="container">
      <h1 className="has-text-centered page-title mb-6 mt-6">
        {campground.name}
      </h1>
      {sliderData?.length > 0 && <ImageSlider slides={sliderData} />}
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
      <div className="columns is-vcentered color-bg-blue p-lg">
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
      <section className="section">
        {userIsAdmin === true && (
          <div className="columns devise-flex">
            <Link
              className="button devise-buttons"
              to={`/campgrounds/${campground.id}/update`}
            >
              Update Campground
            </Link>
            <Link
              className="button devise-buttons"
              to={`/campgrounds/${campground.id}/destroy`}
            >
              Delete Campground
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default CampgroundContainer;
