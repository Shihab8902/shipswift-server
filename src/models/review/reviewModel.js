const { default: mongoose, model } = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    deliveryManId: {
        type: String,
        required: true
    },
    feedback: {
        type: String
    },
    givingDate: {
        type: Date,
        default: new Date()
    },
    deliveryManEmail: {
        type: String
    }
});


const reviewCollection = mongoose.model("review", reviewSchema);

module.exports = reviewCollection;