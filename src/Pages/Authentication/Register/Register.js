import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  /* const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data); */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Create Your Account</h3>

      <label htmlFor="fullName">Full Name</label>
      <input placeholder="Your Name" {...register("fullName")} />

      <label htmlFor="email">Email</label>
      <input placeholder="Your Email" type="email" {...register("email")} />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Your Password"
        type="password"
        {...register("password")}
      />

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      {/* <input type="submit" /> */}
      <button className="register-btn">Sign Up</button>
    </form>
  );
};

export default Register;
