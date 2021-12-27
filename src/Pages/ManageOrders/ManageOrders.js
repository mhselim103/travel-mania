import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("./places.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container text-center">
      <h1>My Orders</h1>
      <Table responsive className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Destination</th>
            <th>Hotel</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order.title}</td>
              <td>{order.hotel}</td>
              <td>Cancel</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
