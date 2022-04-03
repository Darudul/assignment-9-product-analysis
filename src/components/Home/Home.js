import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  return (
    <div>
    <div className="home-page mt-5 me-5 ms-5">
      <div>
        <h2 className="text-center fw-bold h1">
          Your next perfume
          <span className="d-md-block d-lg-block text-warning">
            Your best perfume
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          nisi obcaecati quas ducimus numquam eos nihil vel tenetur iure.
          Laboriosam distinctio ullam voluptatem consectetur. Itaque numquam
          doloribus adipisci dolore. Vel!
        </p>
        <button className="px-3 py-1 border-0 rounded-pill text-primary fw-bold bg-warning ">
          Live Demo
        </button>
      </div>
      <div>
        <img
          src={
            "https://i.ibb.co/JqWnBDx/pesce-huang-mq73c-Wf9-ZAQ-unsplash.jpg"
          }
          alt=""
        />
      </div>
    </div>
    <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
