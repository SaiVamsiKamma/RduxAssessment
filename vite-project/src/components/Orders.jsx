import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderStatus } from "../reducers/orderSlice";
import axios from "axios";
import withSpinner from "./withSpinner";

const Orders = ({ isLoading }) => {
  const orders = useSelector((state) => state.orders.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      orders.forEach((order) => {
        axios.get(`http://localhost:3000/orders/${order.id}`).then((res) => {
          dispatch(updateOrderStatus(res.data));
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [orders, dispatch]);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default withSpinner(Orders);
