const { default: mongoose } = require("mongoose");
const userCollection = require("../../models/users/usersModel");

const getAllDeliveryMan = async (req, res) => {
    const deliveryManInfo = await userCollection.aggregate([
        {
            $match: {
                role: 'deliveryMan',
            },
        },
        {
            $set: {
                parcelDelivered: { $ifNull: ['$parcelDelivered', 0] },
                totalReview: { $ifNull: ['$totalReview', 0] },
                totalReviewer: { $ifNull: ['$totalReviewer', 0] },
            },
        },
    ]);

    res.send(deliveryManInfo);
}



//get specific delivery man
const getSpecificDeliveryMan = async (req, res, next) => {
    try {
        const id = req.query.id;
        const query = { _id: new mongoose.Types.ObjectId(id) };
        const result = await userCollection.findOne(query);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}




module.exports = { getAllDeliveryMan, getSpecificDeliveryMan };