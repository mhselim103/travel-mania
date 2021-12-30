import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="container text-center">
      <h1 className="banner">All Orders</h1>
      <Table responsive className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Email</th>
            <th>Id</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order.email}</td>
              <td>{order.productid}</td>
              <td>
                <button className="red-button">Delete This Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
