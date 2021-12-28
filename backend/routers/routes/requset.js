const express = require("express");

const {
    sendRequest
} = require("../controllers/requset");

const requestRouter = express.Router();


proudectRouter.post("/create/request", sendRequest);



module.exports = requestRouter;