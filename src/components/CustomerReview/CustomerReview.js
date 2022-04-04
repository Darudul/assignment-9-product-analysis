import React from "react";
import { useNavigate } from "react-router";
import useReviews from "../hook/useReviews";
import Review from "../Review/Review";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useReviews();
  const slices = reviews.slice(0, 3);
  let navigate = useNavigate();
  const clickButton = () => {
    const path = `/reviews`;
    navigate(path);
  };

  return (
    <div className="position-relative mb-5">
      <h2 className="review text-center mt-5 text-primary fw-bold">
        Customer review my awesome product
      </h2>
      <div className="review-grid">
        {slices.map((review) => (
          <Review key={review?.id} review={review}></Review>
        ))}
      </div>
      <button
        onClick={clickButton}
        className="mt-5 position-absolute top-100 start-50 translate-middle bg-primary text-white fw-bolder border-0 px-5 py-1 rounded"
      >
        See all reviews
      </button>
    </div>
  );
};

export default CustomerReview;
