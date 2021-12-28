import React from "react";
import Header from "../../Shared/Header/Header";
import Destinations from "../Destinations/Destinations";
import Banner from "../Banner/Banner";
import About from "../../About/About";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Banner></Banner>
      <Destinations></Destinations>
      <About></About>
    </div>
  );
};

export default Home;
