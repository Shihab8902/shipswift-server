const userCollection = require("../../models/users/usersModel");

const getAllDeliveryMan = async (req, res) => {
    const deliveryManInfo = await userCollection.aggregate([
        {
            $match: {
                role: 'deliveryMan',
            },
        },
        {
            $addFields: {
                parcelDelivered: 0,
                totalReview: 0,
                totalReviewer: 0,
            },
        },
    ]);

    res.send(deliveryManInfo);
}




module.exports = { getAllDeliveryMan };