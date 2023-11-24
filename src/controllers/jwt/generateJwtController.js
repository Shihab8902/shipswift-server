const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJwt = (req, res, next) => {
    try {
        const userInfo = req.body;
        const token = jwt.sign(userInfo, process.env.TOKEN_SECRET, { expiresIn: "72h" })
        res.send({ token });
    }
    catch (error) {
        next(error);
    }
}


module.exports = generateJwt;