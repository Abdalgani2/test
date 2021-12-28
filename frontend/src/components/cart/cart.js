import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/cart";
import { LoginContext } from "../../contexts/login";
import "./cart.css";

// import { deleteItem } from "../../../../backend/routers/controllers/cart";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [deleted, setDeleted] = useState(0);

  const loginContext = useContext(LoginContext);
  const cartContext = useContext(CartContext);

  useEffect(async () => {
    let userId = loginContext.userIdLoggedIn;
    await axios
      .get(`http://localhost:5000/show/cart/${userId}`)
      .then((result) => {
        setCartItems(result.data);
        setDone(done + 1);
      })
      .catch((err) => {});
  }, [deleted]);

  useEffect(async () => {
    // if (done) {
    let result = await cartItems.reduce((acc, elem) => {
      return acc + elem.price;
    }, 0);
    setTotal(result);

    // }
  }, [done]);

  // const getTotal = () => {
  //   let result = cartItems.reduce((acc, elem) => {
  //     return acc + elem.price;
  //   }, 0);
  //   setTotal(result);
  // };

  const deleteItem = async (id) => {
    console.log(id, loginContext.userIdLoggedIn);
    await axios
      .delete(
        `http://localhost:5000/show/cart/deleted/${id}/${loginContext.userIdLoggedIn}`
      )
      .then((result) => {
        setDeleted(deleted + 1);
        setDone(!done);
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="cart_main_body">
        {cartItems.map((elem) => {
          let count = 1;
          return (
            <div className="cart_body" key={elem._id}>
              <div>
                <img className="product-img" src={elem.image}></img>
              </div>
              <div className="cart_infos">
                <p className="title">{elem.title} </p>
                <p className="info">Description : {elem.shortDescription}</p>
                <p className="info">Located in : {elem.location}</p>
                <p className="price">In Stock : {elem.quantity}</p>
                <p className="price">Price : {elem.price}$</p>
              </div>
              <div className="quantity_buttons">
                <button>&nbsp;+&nbsp;</button>
                <p>{quantity}</p>
                <button>&nbsp;-&nbsp;</button>
              </div>
              <div>
                <button
                  className="delete_item"
                  onClick={() => {
                    deleteItem(elem._id);
                  }}
                >
                  Delete
                </button>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
      <div className="checkout">
        <p>{total}$</p>
        <button className="buy-button">Buy</button>
      </div>
    </>
  );
};

export default Cart;
