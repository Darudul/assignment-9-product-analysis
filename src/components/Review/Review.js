import React from "react";
import "./Review.css";
const Review = (props) => {
  const { name, about, picture, rating } = props.review;

  return (
    <div className="review-item container mt-4">
      <div className="card-group h-100 ">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title mb-4">
              <span className="fw-bold">Name:</span> {name}
            </h5>
            <p className="card-text">{about}</p>
            <p>
              <span className="fw-bold">Rating:</span> {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
