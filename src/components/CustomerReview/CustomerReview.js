import React from "react";
import { useNavigate } from "react-router";
import useReviews from "../hook/useReviews";
import Review from "../Review/Review";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useReviews();
  const slices = reviews.slice(0, 3);

  return (
    <div className="position-relative mb-5">
      <h2 className="text-center mt-5 text-primary">
        Customer review my awesome product
      </h2>
      <div className="review-grid">
        {slices.map((review) => (
          <Review key={review?.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
