import React from "react";
import { useNavigate } from "react-router";
import useReviews from "../hook/useReviews";
import Review from "../Review/Review";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="position-relative mb-5">
      <h2 className="text-center mt-5 text-primary">
        Customer review my awesome product: {reviews.length}
      </h2>
      <div className="review-grid">
        {reviews.map((review) => (
          <Review key={review?.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
