const express = require("express");
const cors = require("cors");

const applyMiddleWares = (app) => {
    app.use(express.json());
    app.use(cors(
        origin = ["shipswiftbyshihab.netlify.app"]
    ));
}


module.exports = applyMiddleWares;