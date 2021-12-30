import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrders.css";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-gorge-65476.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure , you want to delete?");
    if (proceed) {
      const url = `https://afternoon-gorge-65476.herokuapp.com/orders/${id}`;
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
    <div className="container text-center manage-orders">
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.email}</td>
              <td>{order.productid}</td>
              <td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="red-button"
                >
                  Delete This Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
