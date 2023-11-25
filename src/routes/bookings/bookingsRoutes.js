const { postBooking, getUserSpecificBookings } = require("../../controllers/bookings/bookingsController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get user specific bookings
router.get("/booking", verifyToken, getUserSpecificBookings)

//Post a new booking
router.post("/bookings", verifyToken, postBooking);

module.exports = router;