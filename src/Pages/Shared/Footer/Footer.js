import React from "react";
import { useForm } from "react-hook-form";
import "./Footer.css";

const Footer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-5 footer">
      <footer className="row p-5 container">
        <div className="col-md-4">
          <h1 className="text-primary fw-bold">Travel Mania</h1>
        </div>
        <div className="col-md-8 row text-light">
          <div className="col-md-4">
            <h3>Terms & Conditions</h3>
          </div>
          <div className="col-md-4">
            <h3>Social Network</h3>
          </div>
          <div className="col-md-4">
            <h3>Get Updates & More</h3>
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
