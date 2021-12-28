const express = require("express");

const {
    createProudect,
    getAllProudect
} = require("../controllers/proudect");

const proudectRouter = express.Router();


proudectRouter.post("/create/proudect", createProudect);
proudectRouter.get("/all/proudect", getAllProudect);






module.exports = proudectRouter;