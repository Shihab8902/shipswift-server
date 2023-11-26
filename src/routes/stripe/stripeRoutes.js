const controlCreatePaymentIntent = require("../../controllers/stripe/stripeController");

const router = require("express").Router();



//Create stripe payment intent

router.post("/create-payment-intent", controlCreatePaymentIntent);


module.exports = router;