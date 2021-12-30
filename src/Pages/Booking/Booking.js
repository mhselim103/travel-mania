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
  useEffect(() => {
    fetch(`https://afternoon-gorge-65476.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTour(data);
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://afternoon-gorge-65476.herokuapp.com/orders", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("Tour Booked Successfully");
          navigate("/");
        }
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
              defaultValue={user?.displayName}
            />

            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} value={user?.email} />
            <label htmlFor="title">Title</label>
            {tour && tour.title && (
              <input {...register("title")} value={tour.title} />
            )}
            <label htmlFor="hotel">Title</label>
            {tour && tour.hotel && (
              <input {...register("hotel")} value={tour.hotel} />
            )}
            <label htmlFor="img">Image Url</label>
            {tour && tour.img && (
              <input {...register("img")} value={tour.img} />
            )}
            <label htmlFor="productid">Product Id</label>
            {tour && tour._id && (
              <input type="text" {...register("productid")} value={tour._id} />
            )}
            <label htmlFor="price">Tour Cost</label>
            {tour && tour.price && (
              <input type="text" {...register("price")} value={tour.price} />
            )}
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
