const { getUsers, setUser, getSpecificUser, updateProfilePicture } = require("../../controllers/users/usersController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

//get all users
router.get("/users", getUsers);

//get a specific user
router.get("/user", verifyToken, getSpecificUser);

//post a new user
router.post("/users", setUser);

//Update user profile picture
router.put("/users", verifyToken, updateProfilePicture);





module.exports = router;