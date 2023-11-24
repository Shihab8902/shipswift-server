const generateJwt = require("../../controllers/jwt/generateJwtController");

const router = require("express").Router();


router.post("/jwt", generateJwt);


module.exports = router;