import React from "react";
import Header from "../Shared/Header/Header";
import management from "../../Images/management.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container mt-5">
      {/* <Header></Header> */}
      <h1 className="text-center  mb-4">Who We Are?</h1>
      <div className="row d-md-flex align-items-center">
        <div className="col-md-6 d-md-flex justify-content-end">
          <div>
            <img className="img-fluid" src={management} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <h1 className="mb-5">We Are Travel Experts</h1>
            <p>
              We are your personal travel advocate to help you with everything
              from getting you on the next flight, if your flight is canceled,
              to searching through all of the options to find you the right
              vacation package, cruise, shore excursions, restaurants and more.
              We will provide you with tips, advice and insights that only a
              trained and experienced travel professional can offer. We live and
              love travel and welcome the opportunity to show you how we can
              help you travel better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
