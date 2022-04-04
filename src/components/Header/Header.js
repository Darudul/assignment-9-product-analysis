import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold ">
        <div className="container-fluid d-md-flex  justify-content-end ">
          <div className=" d-lg-flex  justify-content-end ">
            <Link className="nav-link active " aria-current="page" to="home">
              Home
            </Link>

            <Link className="nav-link active" to="reviews">
              Reviews
            </Link>
            <Link className="nav-link active" to="dashboard">
              DashBoard
            </Link>
            <Link className="nav-link active" to="blogs">
              Blogs
            </Link>
            <Link className="nav-link active" to="about">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
