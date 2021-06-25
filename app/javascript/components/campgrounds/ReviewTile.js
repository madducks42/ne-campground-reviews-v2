import React from "react";

const ReviewTile = (props) => {
  return (
    <div>
      <p className="paragraph-format is-size-7 mt-6 mb-6">{props.review}</p>
    </div>
  );
};

export default ReviewTile;
