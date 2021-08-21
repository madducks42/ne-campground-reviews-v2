import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CampgroundTile from "../utilities/CampgroundTile";
import ErrorList from "../utilities/ErrorList";

const HomeContainer = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [userIsAdmin, setUserIsAdmin] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/api/v1/campgrounds")
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
        setCampgrounds(body);
        if (body[0].userIsAdmin) {
          setUserIsAdmin(body[0].userIsAdmin);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let campgroundTiles = campgrounds.map((campground) => {
    return (
      <CampgroundTile
        key={campground.id}
        id={campground.id}
        name={campground.name}
        location={campground.location}
        caption={campground.caption}
      />
    );
  });

  const filterCampgrounds = (filterItems) => {
    fetch("/api/v1/campgrounds/filter", {
      method: "POST",
      body: JSON.stringify(filterItems),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((filteredCampgrounds) => {
        if (filteredCampgrounds.errors) {
          setErrors(filteredCampgrounds.errors);
        } else {
          setCampgrounds(filteredCampgrounds);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div>
      <section className="hero is-link is-fullheight-with-navbar border-bottom">
        <div className="hero-body landing-image">
          <div className="container has-text-centered opacity-callout">
            <p className="title-medium">
              Welcome to Northeast Campground Reviews!
            </p>
            <p className="color-black">
              Below you can view all the campgrounds we&apos;ve been to in the
              northeast so far! We include our review of the campground, general
              information, and photos of the campground and surrounding area. We
              hope this information is useful for those camping in the
              Northeast. We&apos;ll be adding new campground reviews and
              updating existing ones every year!
            </p>
          </div>
        </div>
      </section>
      <div className="columns border-top">
        <div className="column is-narrow color-bg-white">
          <div className="left-nav-bar">
            <SearchBar />
            <div className="flex-column">
              <ErrorList errors={errors} />
              <Filter filterCampgrounds={filterCampgrounds} />
            </div>
          </div>
        </div>
        <div className="column color-bg-white">
          {userIsAdmin === true && (
            <div className="columns devise-flex">
              <Link className="button devise-buttons" to="/campgrounds/new">
                Add New Campground
              </Link>
            </div>
          )}
          <div className="container campground-tile-container">
            {campgroundTiles}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
