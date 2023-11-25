const { default: mongoose } = require("mongoose");

const bookingsSchema = new mongoose.Schema({

    bookingDate: {
        type: Date,
        required: true,
    },
    calculatedDeliveryPrice: {
        type: Number,
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    },
    deliveryAddressLatitude: {
        type: String,
        required: true,
    },
    deliveryAddressLongitude: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    parcelType: {
        type: String,
        required: true,
    },
    parcelWeight: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    receiversName: {
        type: String,
        required: true,
    },
    receiversPhone: {
        type: String,
        required: true,
    },
    requestedDeliveryDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
})


const bookingCollection = mongoose.model("bookings", bookingsSchema);

module.exports = bookingCollection;