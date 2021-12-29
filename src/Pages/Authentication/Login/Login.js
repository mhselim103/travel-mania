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
    <div className="container row my-5">
      <div className="col-sm-12 col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-5">Log In Here</h3>
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
          <button type="submit" className="sign-in w-100 mt-3">
            Sign In
          </button>
        </form>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h4>Or Sign In Here</h4>
          <button onClick={googleSignIn} className="google sign-in my-3">
            Sign In with Google
          </button>
          <button onClick={googleSignIn} className="fb sign-in mb-3">
            Sign In with Facebook
          </button>
          <button onClick={googleSignIn} className="github sign-in">
            Sign In with Github
          </button>
        </div>
      </div>
      {/* <button onClick={logOut} className="login-btn">
        Log Out
      </button> */}
    </div>
  );
};

export default Login;
