const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number || String,
        required: true,
    },
    status: {
        type: String,
        default: "paid",
    },
});

const paymentCollection = mongoose.model('payments', paymentSchema);

module.exports = paymentCollection;
