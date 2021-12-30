import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Header from "../Shared/Header/Header";
import "./MyOrders.css";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="container text-center">
      {/* <Header></Header> */}
      <h1 className="">My Orders</h1>
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
              <td>{order.email}</td>
              <td>{order.productid}</td>
              <td>
                <button className="red-button">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
