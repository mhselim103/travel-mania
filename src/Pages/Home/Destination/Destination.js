import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Destination = ({ place }) => {
  const { img, title, price, _id } = place;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} className="img-fluid h-100" />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <div className="px-3 my-1 d-flex align-items-center justify-content-between">
          <h6>Fare : {price}</h6>
          <Link to={`/${_id}`}>
            <button className="button mb-1">
              Explore <i className="fas fa-angle-right"></i>{" "}
            </button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Destination;
