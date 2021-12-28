const express = require("express");
const cors = require("cors");
// const db = require("./db/db");



const app = express();

//routers
const registerRouter = require("./routers/routes/register");
const authRouter = require("./routers/routes/login");
const proudectRouter = require("./routers/routes/proudect");
const cartRouter=require("./routers/routes/cart")
//built-in middleWares
app.use(express.json());

//third-party middleware
app.use(cors());
app.use( registerRouter,authRouter,proudectRouter,cartRouter);
//app routers

module.exports = app

