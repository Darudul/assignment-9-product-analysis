import React from "react";
import useReviews from "../hook/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="position-relative mb-5">
      <h2 className="text-center mt-5 text-primary fw-bold">
        Customer reviews!
      </h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <Review key={review?.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
