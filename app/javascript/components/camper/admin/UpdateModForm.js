import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import ErrorList from "../../utilities/ErrorList";

const UpdateModForm = (props) => {
  let defaultFields = {
    title: "",
    body: "",
  };

  const [updatedMod, setUpdatedMod] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    let id = props.match.params.id;
    fetch(`/api/v1/mods/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((body) => {
        setUpdatedMod(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const updateMod = (formData) => {
    let id = props.match.params.id;
    fetch(`/api/v1/mods/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.errors) {
          setErrors(body.errors);
        } else {
          setShouldRedirect(body.id);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setUpdatedMod({
      ...updatedMod,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "body"];
    requiredFields.forEach((field) => {
      if (
        updatedMod[field].trim() === "" ||
        updatedMod[field].trim() === ""
      ) {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validForSubmission()) {
      updateMod(updatedMod);
    }
  };

  if (shouldRedirect) {
    return <Redirect to={`/camper`} />;
  }

  return (
    <div className="container">
      <h3 className="has-text-centered is-size-3 font-red mt-6 has-text-weight-semibold">
        Update Camper Mod
      </h3>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit} className="new-campground-form callout">
            {/* <h3>Update Campground</h3> */}
            <ErrorList errors={errors} />
            <div className="field">
              <label className="label">
                Title:
                <div className="control">
                  <input
                    name="title"
                    id="title"
                    type="text"
                    onChange={handleChange}
                    value={updatedMod.title}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>

            <div className="field">
              <label className="label">
                Body:
                <div className="control">
                  <textarea
                    name="body"
                    id="body"
                    type="textarea"
                    onChange={handleChange}
                    value={updatedMod.body}
                    className="campground-form"
                  />
                </div>
              </label>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button" type="submit" value="Submit">
                  Submit
                </button>
              </div>
              {/* <div className="control">
                <button className="button" type="submit" value="Cancel">Cancel</button>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModForm;
