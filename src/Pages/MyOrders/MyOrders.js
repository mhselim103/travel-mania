import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure , you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div className="container text-center">
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.title}</td>
              <td>{order.hotel}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="red-button"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
