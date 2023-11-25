const { postBooking } = require("../../controllers/bookings/bookingsController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


router.post("/bookings", verifyToken, postBooking);

module.exports = router;