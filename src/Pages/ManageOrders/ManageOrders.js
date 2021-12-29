import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const { logOut } = useAuth();
  useEffect(() => {
    fetch("./places.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container text-center">
      <h1 className="banner">All Orders</h1>
      <Table responsive className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Destination</th>
            <th>Id</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order.title}</td>
              <td>{order.price}</td>
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
