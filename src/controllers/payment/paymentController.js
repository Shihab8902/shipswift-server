const { default: mongoose } = require("mongoose");
const paymentCollection = require("../../models/payment/paymentModel");

//Get payment info
const getPaymentInfo = async (req, res, next) => {
    try {
        const email = req.query.email;
        const query = { email: email };
        const result = await paymentCollection.find(query);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}




//Post a new payment
const savePaymentInfo = async (req, res, next) => {
    try {
        const data = req.body;
        const newPayment = new paymentCollection(data);
        const result = await newPayment.save();
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { savePaymentInfo, getPaymentInfo };