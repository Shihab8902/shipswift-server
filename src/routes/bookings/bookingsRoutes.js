const { postBooking, getUserSpecificBookings, getABooking, updateBooking } = require("../../controllers/bookings/bookingsController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get user specific bookings
router.get("/booking", verifyToken, getUserSpecificBookings);

//Get a booking
router.get("/booking/:id", getABooking);

//Post a new booking
router.post("/bookings", verifyToken, postBooking);

//Update a booking
router.put("/bookings", verifyToken, updateBooking);

module.exports = router;