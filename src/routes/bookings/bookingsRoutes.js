const { postBooking, getUserSpecificBookings, getABooking, updateBooking, getBookings, getDeliverymanBooking } = require("../../controllers/bookings/bookingsController");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//Get all bookings
router.get("/bookings", verifyToken, verifyAdmin, getBookings)

//Get user specific bookings
router.get("/booking", verifyToken, getUserSpecificBookings);

//Get delivery man bookings
router.get("/delivery/booking", verifyToken, getDeliverymanBooking);

//Get a booking
router.get("/booking/:id", getABooking);

//Post a new booking
router.post("/bookings", verifyToken, postBooking);

//Update a booking
router.put("/bookings", verifyToken, updateBooking);

module.exports = router;