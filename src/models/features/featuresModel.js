const { default: mongoose } = require("mongoose");

const featuresSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});


const featureCollection = mongoose.model("features", featuresSchema);

module.exports = featureCollection;