const { getAllDeliveryMan } = require("../../controllers/delivery man/deliveryManController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get all delivery man
router.get("/deliveryMans", verifyToken, getAllDeliveryMan);


module.exports = router;