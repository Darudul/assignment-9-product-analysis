import React from "react";
import "./Review.css";
const Review = (props) => {
  const { name, about, picture } = props.review;
  return (
    <div className="review-item container mt-4">
      <div className="card-group">
        <div className="card">
          <img
            src={picture}
            className="card-img-top  p-2 "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
