import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Footer.css";

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/emails", data)
      .then(function (response) {
        console.log();
        if (response.data.insertedId) {
          alert("Subscribed");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="mt-5 footer">
      <footer className="row p-5 container">
        <div className="col-md-4">
          <h1 className="text-primary fw-bold">Travel Mania</h1>
        </div>
        <div className="col-md-8 row text-light ">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <h5>Terms & Conditions</h5>
              <h6 className="text-center my-3">Privacy</h6>
              <h6 className="text-center">Policy</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex  flex-column align-items-center">
              <h5>Social Network</h5>
              <i className="fab fa-facebook my-2 text-primary bg-light fs-3"></i>
              <i className="fab fa-instagram fs-3"></i>
              <i className="fab fa-whatsapp my-2 fs-3"></i>
              <i className="fab fa-telegram fs-3"></i>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Get Updates & More</h5>
            <p>Subscribe to the free newsletter and stay up to date</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                type="email"
                placeholder="Your Email"
              />
              <button className="submit w-100 bg-danger text-light rounded rounded-5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
