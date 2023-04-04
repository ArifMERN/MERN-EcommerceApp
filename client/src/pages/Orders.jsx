import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const Order = ({ item }) => {
  return <div className="order">{item.name}</div>;
};
const Orders = () => {
  const fetchData = async () => {
    axios.defaults.withCredentials = true;

    const res = await axios.get(
      "http://localhost:4500/api/v1/order/orders/all",
      {
        withCredentials: true,
      }
    );

    return res.data.message;
  };
  const { info, isLoading, isError, refetch } = useQuery(["orders"], fetchData);
  return (
    <div>
      {isError && <p>something wrong</p>}
      {isLoading && <p>Loading</p>}
      {info &&
        info?.map((order) => {
          return <Order key={order._d} item={order} />;
        })}
    </div>
  );
};

export default Orders;
