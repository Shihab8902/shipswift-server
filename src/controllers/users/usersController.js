const userCollection = require("../../models/users/usersModel")

//get all users
const getUsers = async (req, res, next) => {
    try {
        const users = await userCollection.find();
        res.send(users);
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




module.exports = { getUsers, setUser, getSpecificUser };