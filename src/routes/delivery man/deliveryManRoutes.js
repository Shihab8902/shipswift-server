const { getAllDeliveryMan, getSpecificDeliveryMan } = require("../../controllers/delivery man/deliveryManController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get all delivery man
router.get("/deliveryMans", verifyToken, getAllDeliveryMan);


//Get specific delivery man
router.get("/deliveryMan", verifyToken, getSpecificDeliveryMan)


module.exports = router;