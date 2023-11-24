const featureCollection = require("../../models/features/featuresModel");

const getFeatures = async (req, res, next) => {
    try {
        const result = await featureCollection.find();
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}


module.exports = { getFeatures };