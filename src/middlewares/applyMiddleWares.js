const express = require("express");
const cors = require("cors");

const applyMiddleWares = (app) => {
    app.use(express.json());
    app.use(cors());
}


module.exports = applyMiddleWares;