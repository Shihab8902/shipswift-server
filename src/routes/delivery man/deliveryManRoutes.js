const { getAllDeliveryMan, getSpecificDeliveryMan, getTopDeliveryMan } = require("../../controllers/delivery man/deliveryManController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get all delivery man
router.get("/deliveryMans", verifyToken, getAllDeliveryMan);

//Get top delivery man
router.get("/topDeliveryMan", getTopDeliveryMan)


//Get specific delivery man
router.get("/deliveryMan", verifyToken, getSpecificDeliveryMan)


module.exports = router;