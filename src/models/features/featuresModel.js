const { default: mongoose } = require("mongoose");

const featuresSchema = new mongoose.Schema({
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