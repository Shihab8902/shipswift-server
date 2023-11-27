const { default: mongoose } = require("mongoose");
const bookingCollection = require("../../models/bookings/bookingsModel");



//Get all bookings
const getBookings = async (req, res, next) => {
    try {

        const { startDate, endDate } = req.query;

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const result = await bookingCollection.find({ requestedDeliveryDate: { $gte: start, $lte: end } });
            return res.send(result);
        }

        const result = await bookingCollection.find();
        res.send(result);
    }
    catch (error) {
        next(error)
    }
}


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


//Get a booking
const getABooking = async (req, res, next) => {
    try {
        const id = req.params.id;
        const query = { _id: new mongoose.Types.ObjectId(id) };
        const result = await bookingCollection.findOne(query);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}




//get delivery man specific booking
const getDeliverymanBooking = async (req, res, next) => {
    try {
        const id = req.query.id;
        const query = { deliveryManId: id };
        const result = await bookingCollection.find(query);
        res.send(result);
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



//Update a booking
const updateBooking = async (req, res, next) => {
    try {
        const id = req.query.id;
        const document = req.body;
        const query = { _id: new mongoose.Types.ObjectId(id) };

        const result = await bookingCollection.updateOne(query, document);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}



//Get bookings by date
const getBookingByDate = async (req, res, next) => {
    try {
        const result = await bookingCollection.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$bookingDate",
                        },
                    },
                    bookingCount: { $sum: 1 },
                },
            },
            {
                $project: {
                    date: "$_id",
                    bookingCount: 1,
                    _id: 0,
                },
            },
        ]);

        res.send(result);
    }

    catch (error) {
        next(error);
    }
}




//get booking count 
const getBookingCount = async (req, res, next) => {
    try {
        const result = await bookingCollection.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);


        const delivered = result.find(item => item._id === "delivered")?.count || 0;
        const total = await bookingCollection.estimatedDocumentCount();

        res.send({ delivered, total: total });

    }
    catch (error) {
        next(error);
    }
}



module.exports = { postBooking, getUserSpecificBookings, getABooking, updateBooking, getBookings, getDeliverymanBooking, getBookingByDate, getBookingCount };