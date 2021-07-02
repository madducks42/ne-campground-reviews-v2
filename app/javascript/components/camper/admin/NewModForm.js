import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import CodeSample from "../../utilities/CodeSample"
import ErrorList from "../../utilities/ErrorList";

export const NewPostForm = () => {
  let defaultFields = {
    title: "",
    body: "",
  };

  const [newMod, setNewMod] = useState(defaultFields);
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect to="/camper" />;
  }

  const addNewMod = (formData) => {
    fetch("/api/v1/mods", {
      method: "POST",
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
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const handleChange = (event) => {
    setNewMod({
      ...newMod,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["title", "body"];
    requiredFields.forEach((field) => {
      if (
        newMod[field].trim() === "" ||
        newMod[field].trim() === ""
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
      addNewMod(newMod);
      setNewMod(defaultFields);
    }
  };

  return (
    <div className="container mt-6">
      <h3 className="has-text-centered is-size-3 font-blue mt-6 has-text-weight-semibold">
        Add New Post
      </h3>
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSubmit} className="new-post-form callout">
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
                    value={newMod.title}
                    className="input"
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
                    value={newMod.body}
                    className="textarea is-medium"
                    rows="15"
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
            </div>
          </form>
          <CodeSample />
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
