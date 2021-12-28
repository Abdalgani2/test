const express = require("express");

const { login } = require("./../../routers/controllers/login");

const authRouter = express.Router();

authRouter.post("/login", login);

module.exports = authRouter;