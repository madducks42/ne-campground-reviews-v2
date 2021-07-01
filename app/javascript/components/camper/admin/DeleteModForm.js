import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "../../utilities/ErrorList";

const DeleteModForm = (props) => {
  const [currentMod, setCurrentMod] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});

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
        setCurrentMod(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  const onClickDelete = (event) => {
    event.preventDefault();
    let id = props.match.params.id;
    fetch(`/api/v1/mods/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
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
      .then((body) => {
        if (body.destroyed === true) {
          setShouldRedirect(true);
        } else setErrors(body.errors);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to="/camper" />;
  }

  return (
    <div className="container">
      <div className="flex-column mt-6">
        <ErrorList errors={errors} />
        <h4 className="is-size-4">Are you sure you want to delete {currentMod.title}?</h4>
        <div>
          <input
            onClick={onClickDelete}
            className="button"
            type="submit"
            value="Delete Post"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModForm;
