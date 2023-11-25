const bookingCollection = require("../../models/bookings/bookingsModel");

//post a new booking
const postBooking = async (req, res, next) => {
    try {
        const data = req.body;
        const newBooking = new bookingCollection(data);
        const result = await newBooking.save();
        res.send(result);
    }
    catch (error) {
        next(error)
    }
}


module.exports = { postBooking };