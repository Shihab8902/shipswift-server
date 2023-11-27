const { default: mongoose } = require("mongoose");
const userCollection = require("../../models/users/usersModel")

//get all users
const getUsers = async (req, res, next) => {
    try {

        const skipItem = parseInt(req.query.skip);
        const itemLimit = parseInt(req.query.limit);

        const usersWithBookingInfo = await userCollection.aggregate([
            {
                $lookup: {
                    from: "bookings",
                    localField: "email",
                    foreignField: "email",
                    as: "bookings",
                },

            },
            {
                $unwind: {
                    path: "$bookings",
                    preserveNullAndEmptyArrays: true,
                }
            },
            {
                $group: {
                    _id: "$_id",
                    user: { $first: "$$ROOT" },
                    totalPrice: { $sum: "$bookings.calculatedDeliveryPrice" },
                    numberOfParcelBooked: { $sum: { $cond: { if: '$bookings', then: 1, else: 0 } } }
                }
            },
            {
                $project: {
                    "user.bookings": 0,
                    _id: 0,

                }
            },
            {
                $skip: skipItem
            },
            {
                $limit: itemLimit
            }

        ]);

        res.send(usersWithBookingInfo);
    }
    catch (error) {
        next(error);
    }
}



//get a specific user
const getSpecificUser = async (req, res, next) => {
    try {
        const { email } = req.query;
        const query = { email: email };
        const result = await userCollection.findOne(query);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}


//get total users count
const getTotalUserCount = async (req, res, next) => {
    try {
        const totalUser = await userCollection.estimatedDocumentCount();
        res.send({ totalUser });
    }
    catch (error) {
        next(error);
    }
}


//add a new user
const setUser = async (req, res, next) => {
    try {
        const user = req.body;
        const query = { email: user?.email };
        const isExist = await userCollection.findOne(query);

        if (isExist) {
            return res.send({ message: "The user is already exist!" });
        }
        const newUser = new userCollection(user);
        const result = await newUser.save();

        res.send({ result });

    }
    catch (error) {
        next(error);
    }
}



//Update user profile picture
const updateProfilePicture = async (req, res, next) => {
    try {
        const email = req.query.email;
        console.log(email);
        const updatedPicture = req.body;
        const query = { email: email };
        const result = await userCollection.updateOne(query, updatedPicture)
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}


//update user role
const updateUserRole = async (req, res, next) => {
    try {
        const email = req.query.email;
        const userRole = req.query.role;
        const query = { email: email };
        const result = await userCollection.updateOne(query, { role: userRole });
        res.send(result);

    }
    catch (error) {
        next(error);
    }
}



//update delivery man stats
const updateDeliveryMan = async (req, res, next) => {
    try {
        const id = req.query.id;
        const data = req.body;
        const query = { _id: new mongoose.Types.ObjectId(id) };
        const result = await userCollection.updateOne(query, data);
        res.send(result);
    }
    catch (error) {
        next(error);
    }
}



module.exports = { getUsers, setUser, getSpecificUser, updateProfilePicture, getTotalUserCount, updateUserRole, updateDeliveryMan };