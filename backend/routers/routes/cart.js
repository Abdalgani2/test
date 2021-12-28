const express = require("express");

const {
    addToCart,
    getAllCart,
    editproduct
} = require("../controllers/cart");

const cartRouter = express.Router();

cartRouter.post("/create/cart", addToCart);
cartRouter.get("/all/cart", getAllCart);
cartRouter.put("/edit/:id", editproduct);

module.exports = cartRouter;
