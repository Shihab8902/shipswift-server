const express = require("express");
const globalErrorHandler = require("./utilities/globalErrorHandler");
const applyMiddleWares = require("./middlewares/applyMiddleWares");
const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 9000;


//Middlewares
applyMiddleWares(app);


//Routes
const featuresRoutes = require('./routes/features/featuresRoutes');
const usersRoutes = require('./routes/users/usersRoutes');
const jwtRoutes = require("./routes/jwt/generateJwt");


//Use routes
app.use(featuresRoutes);
app.use(usersRoutes);
app.use(jwtRoutes);















app.get("/", (req, res) => {
    res.send({ message: "The server is up and running...." });
});



//Handle server errors
app.all("*", (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} does not exist on the server`);
    error.status = 404;
    next(error);
});

app.use(globalErrorHandler);




//Database connection and listen server

const listenServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`The server is running at http://localhost:${port}`)
    });

}

listenServer();



