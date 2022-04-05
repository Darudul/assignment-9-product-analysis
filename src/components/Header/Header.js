import React from "react";
import CustomLink from "../CustomHook/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fw-bold ">
        <div className="container-fluid d-md-flex  justify-content-end ">
          <div className=" d-lg-flex  justify-content-end ">
            <CustomLink
              className="nav-link active "
              aria-current="page"
              to="home"
            >
              Home
            </CustomLink>

            <CustomLink className="nav-link active" to="reviews">
              Reviews
            </CustomLink>
            <CustomLink className="nav-link active" to="dashboard">
              DashBoard
            </CustomLink>
            <CustomLink className="nav-link active" to="blogs">
              Blogs
            </CustomLink>
            <CustomLink className="nav-link active" to="about">
              About
            </CustomLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
