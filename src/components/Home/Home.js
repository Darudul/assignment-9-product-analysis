import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <div className="home-page mt-5 me-5 ms-5">
          <div className="top-header">
            <h2 className="header text-center fw-bold h1 mb-4">
              Choose your
              <span className="d-md-block d-lg-block text-warning">
                Best perfume
              </span>
            </h2>
            <p className="style-width">
              Every day here at Allure, our editors receive the newest perfumes
              from the largest fragrance houses and the smallest indie brands
              all before they make it to market, so we can get an exclusive look
              — or sniff — at what the upcoming season's best perfumes will be.
              If you think walking by a department store's fragrance counters is
              intimidating, you should get a look at our work-from-home desks.
              These aren't "natural scents," per se, but more so what Aftel
              describes as fragrances with fresh and herbaceous properties to
              them — a rather sharp turn from the traditional warmth associated
              with perfumes for the cooler months. But that doesn't mean we're
              bidding farewell to our floral fragrances or spicier perfumes for
              good. There's room for all of them in our collections.
            </p>
            <button className="button-style px-3 py-1 border-0 rounded-pill text-primary fw-bold bg-warning mt-4">
              Live Demo
            </button>
          </div>
          <div>
            <img
              src={
                "https://i.ibb.co/SnFjZXM/laura-chouette-2-H-8-Wb-VPRx-M-unsplash.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
