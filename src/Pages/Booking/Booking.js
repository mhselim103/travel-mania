import React from "react";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="booking">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <input {...register("email")} />
        <input {...register("destination")} />
        <input {...register("price")} type="number" />
        <input {...register("phone")} type="number" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Booking;
