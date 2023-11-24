const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
        .then(() => {
            console.log("Successfully connected to the database.");
        }).catch(error => {
            console.log(error.message);
        })
}

module.exports = connectDB;