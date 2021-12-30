import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewDestination.css";

const AddNewDestination = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    axios
      .post("http://localhost:5000/packages", data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("New Destination Added");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h3 className="my-3 text-center text-primary">Add a New Destination</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("img")} placeholder="Image Url" />
        <input {...register("title")} placeholder="Title" />
        <textarea
          {...register("description")}
          placeholder="Description"
          className="form-control description"
        />
        <input {...register("hotel")} placeholder="Hotel Name" />
        <input {...register("bedroom")} placeholder="Bedrooms" />
        <input {...register("price")} placeholder="Price" />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddNewDestination;
