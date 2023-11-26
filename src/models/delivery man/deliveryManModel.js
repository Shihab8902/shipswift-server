const { default: mongoose } = require("mongoose");

const deliveryManSchema = new mongoose.Schema({
    parcelDelivered: {
        type: Number,
        default: 0
    },
    review: {
        type: String,
        default: 0
    },
    reviewGiver: {
        type: Number,
        default: 0
    }
});


const deliveryManCollection = mongoose.model("deliveryMan", deliveryManSchema);


module.exports = deliveryManCollection;