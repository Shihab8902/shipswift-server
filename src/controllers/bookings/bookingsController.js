const bookingCollection = require("../../models/bookings/bookingsModel");




//get user specific bookings
const getUserSpecificBookings = async (req, res, next) => {
    try {
        const { email } = req.query;
        if (req.email.email !== email) {
            return res.status(403).send({ message: "forbidden" });
        }
        const query = { email: email };
        const bookings = await bookingCollection.find(query);
        res.send(bookings);
    }
    catch (error) {
        next(error);
    }
}






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


module.exports = { postBooking, getUserSpecificBookings };