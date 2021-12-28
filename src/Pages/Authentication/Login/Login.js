import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();
  // console.log(signInUsingGoogle);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  // const redirect_uri = location?.state?.from || "/";
  const onSubmit = (data) => {
    console.log(data);
  };
  const googleSignIn = (e) => {
    e.preventDefault();
    // console.log("hello");
    signInUsingGoogle(location, navigate);
  }; /* 
  const logout= () => {
    logout()
  } */
  return (
    <div className="container">
      <h1>Hello from login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In </h3>
        {/* 
      <label htmlFor="lastName">Full Name</label>
      <input placeholder="Your Name" {...register("fullName")} /> */}

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
        <button type="submit" className="login-btn">
          Sign In
        </button>
      </form>
      <button onClick={googleSignIn} className="login-btn">
        Sign In
      </button>
      {/* <button onClick={logOut} className="login-btn">
        Log Out
      </button> */}
    </div>
  );
};

export default Login;
