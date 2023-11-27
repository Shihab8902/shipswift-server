const reviewCollection = require("../../models/review/reviewModel")

//Get all review
const getAllReview = async (req, res, next) => {
    try {
        const { email } = req.email;
        const query = { deliveryManEmail: email };
        const result = await reviewCollection.find(query);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}

//post a new review
const postReview = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data)
        const newDocument = new reviewCollection(data);
        const result = await newDocument.save();
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}

module.exports = { getAllReview, postReview }