import React from "react";
import Filters from "../components/Filters";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART } from "../redux/cartSlice";
import { GETALLPRODUCTS } from "../redux/productSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(ADDTOCART(item))}>
          🛒Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
const Products = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await axios.get("http://localhost:4500/api/v1/product");
    dispatch(GETALLPRODUCTS(res.data.message));
    return res.data.message;
  };
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery(["data"], fetchData);

  if (isLoading) {
    return <h1>Loading</h1>;
  } else if (isError) {
    return (
      <h1>
        error try refetch <button onClick={refetch}>try again</button>
      </h1>
    );
  } else {
    return (
      <>
        {products?.map((item) => {
          return <Product key={item._id} item={item} />;
        })}
      </>
    );
  }
};

export default Products;
