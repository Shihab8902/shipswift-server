const { savePaymentInfo, getPaymentInfo } = require("../../controllers/payment/paymentController");
const verifyToken = require("../../middlewares/verifyToken");
const router = require("express").Router();

//Get a payment info
router.get("/payments", verifyToken, getPaymentInfo);


//Save a payment info
router.post("/payments", savePaymentInfo);


module.exports = router;