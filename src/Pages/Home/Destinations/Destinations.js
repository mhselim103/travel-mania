import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import Destination from "../Destination/Destination";

const Destinations = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("./places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div>
      {/* <Header></Header> */}
      <div className="container">
        <h2 className="my-5">Discover The Beauty of Nature</h2>

        <Row xs={1} md={3} className="g-4">
          {places?.map((place) => (
            <Destination key={place.id} place={place}></Destination>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Destinations;
