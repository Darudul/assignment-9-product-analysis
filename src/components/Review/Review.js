import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
import { useNavigate } from "react-router";
const Review = (props) => {
  const { name, about, picture, id } = props.review;

  return (
    <div className="review-item container mt-4">
      <div className="card-group h-100">
        <div className="card ">
          <img src={picture} className="card-img-top  p-2 " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">{about}</p>
          </div>
          <p className="ms-3 text-warning">
            <span className="text-black fw-bold">Ratings: </span>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
