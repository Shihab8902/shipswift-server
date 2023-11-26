const userCollection = require("../models/users/usersModel");

const verifyAdmin = async (req, res, next) => {
    const email = req.email.email;
    const query = { email: email }
    const result = await userCollection.findOne(query);
    if (result?.role !== "admin") {
        return res.status(403).send({ message: "forbidden" });
    }
    next();
}


module.exports = verifyAdmin;