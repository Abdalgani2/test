const express = require("express");

const { createUser } = require("./../controllers/register");

const registerRouter = express.Router();

registerRouter.post("/register", createUser);

module.exports = registerRouter;