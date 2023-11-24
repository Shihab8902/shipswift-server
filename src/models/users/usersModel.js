const { default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});


const userCollection = mongoose.model("users", usersSchema);


module.exports = userCollection;