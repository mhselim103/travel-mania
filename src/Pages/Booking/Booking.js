import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("./places.json")
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  // console.log(tour);
  const tourDetails = tour?.filter((tr) => tr.id === id);
  // console.log(tourDetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="row booking container mt-5">
      <div className="col-md-6">
        <h3 className="text-center text-primary mb-3">Tour Details</h3>
        <img className="img-fluid" src={tourDetails[0]?.img} alt="" />
        <h3 className="text-primary">
          <span className="text-success">Destination</span> :
          {tourDetails[0]?.title}
        </h3>
        <p>{tourDetails[0]?.description}</p>
        <p className="text-danger">Total Tour Cost:{tourDetails[0]?.price}</p>
        <h4>Hotel/Resort : {tourDetails[0]?.hotel}</h4>
        <h4>Bed Room : 3</h4>
      </div>
      <div className="col-md-6">
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
          <label htmlFor="tourCost">Tour Cost</label>
          <input
            type="number"
            {...register("price")}
            value={tourDetails[0]?.price}
          />
          <div style={{ color: "red" }}>
            {Object.keys(errors).length > 0 &&
              "There are errors, check your console."}
          </div>
          <button type="submit" className="register-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
