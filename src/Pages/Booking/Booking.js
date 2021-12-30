import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [tour, setTour] = useState([]);
  const navigate = useNavigate();
  // const [tourId, setTourId] = useState("");
  // const [tourCost, setTourCost] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setTourId(data._id);
        // setTourCost(data.price);
        setTour(data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/orders", data)
      .then(function (response) {
        console.log(response.data.insertedId);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row booking container mt-5">
      <div className="col-md-6">
        <h3 className="text-center text-primary mb-3">Tour Details</h3>
        <img className="img-fluid" src={tour?.img} alt="" />
        <h3 className="text-primary">
          <span className="text-success">Destination</span> :{tour?.title}
        </h3>
        <p>{tour?.description}</p>
        <p className="text-danger">Total Tour Cost:{tour?.price}</p>
        <h4>Hotel/Resort : {tour?.hotel}</h4>
        <h4>Bed Room : 3</h4>
      </div>
      <div className="col-md-6">
        {tour ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-primary mt-2">Book Your Tour</h3>
            <label htmlFor="fullName">Full Name</label>
            <input
              placeholder="Your Name"
              {...register("fullName")}
              defaultValue={user.displayName}
            />

            <label htmlFor="email">Email</label>
            <input
              placeholder="Your Email"
              type="email"
              {...register("email")}
              value={user?.email}
            />
            <label htmlFor="productid">Product Id</label>
            <input
              placeholder="ProductId"
              type="text"
              {...register("productid")}
              value={id}
            />
            {/* <label htmlFor="tourCost">Tour Cost</label>
            <input type="text" {...register("tourCost")} value={tour?.price} /> */}
            <div style={{ color: "red" }}>
              {Object.keys(errors).length > 0 &&
                "There are errors, check your console."}
            </div>
            <button type="submit" className="register-btn">
              Book Now
            </button>
          </form>
        ) : (
          "Loading......"
        )}
      </div>
    </div>
  );
};

export default Booking;
