import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DECREASEQTY,
  GetAllCartItems,
  INCREASEQTY,
  REMOVEFROMCART,
} from "../redux/cartSlice";
// cart item
const CartItem = ({ product, index }) => {
  const qty = product.qty;
  const price = product.price;
  const dispatch = useDispatch();

  return (
    <Card
      style={{
        width: "60vw",
        flexDirection: "row",
        marginLeft: "10px",
      }}
      key={product._id}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {product.name} {index}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* changing the quantity of product */}
          <label htmlFor="quantity">Qty:</label>
          <>
            <Button
              onClick={() => {
                if (qty > 1) {
                  dispatch(DECREASEQTY({ index, price }));
                }
              }}
            >
              -
            </Button>
            <span>{qty}</span>
            <Button
              onClick={() => {
                if (qty < 5) {
                  dispatch(INCREASEQTY({ index, price }));
                }
              }}
            >
              +
            </Button>
          </>

          <span>Price: {product?.price}</span>

          <Button
            variant="danger"
            onClick={() => dispatch(REMOVEFROMCART(product))}
          >
            Remove
          </Button>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

const Cart = () => {
  const cart = useSelector(GetAllCartItems);
  const navigate = useNavigate();

  return (
    <>
      {cart.items.length !== 0 ? (
        <>
          {cart.items?.map((product, index) => {
            return (
              <CartItem key={product._id} product={product} index={index} />
            );
          })}
        </>
      ) : (
        <Container>
          <h3>No items in the Cart!</h3>
          <Button onClick={() => navigate("/products")}>Buy Something</Button>
        </Container>
      )}
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          position: "sticky",
          bottom: "10px",
          right: "10px",
        }}
      >
        <h1>Total Price:</h1>
        {cart.totalPrice ? <h1>{cart.totalPrice}</h1> : <h1>0</h1>}
        <Button
          variant="danger"
          onClick={() => {
            navigate("/payments");
          }}
        >
          CheckOut
        </Button>
      </Container>
    </>
  );
};

export default Cart;
