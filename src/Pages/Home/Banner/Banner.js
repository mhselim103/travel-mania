import React from "react";
import "./Banner.css";
import bannerimg from "../../../Images/hero-1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container  ">
      <div className="row my-5">
        <div className="col-sm-12 col-md-4">
          <img className="w-100" src={bannerimg} alt="" />
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="ms-4">
            <h1 className="heading">
              Life is short and <br /> the world is wide!
            </h1>
            <h4 className="my-4">
              To get the best of your adventure you just <br /> need to leave
              and go where you like.We <br /> are waiting for you.
            </h4>
            <Link to="/destinations">
              <button className="button">
                Plan a Tour <i className="fas fa-angle-right"></i>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
