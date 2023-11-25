const { getUsers, setUser, getSpecificUser } = require("../../controllers/users/usersController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

//get all users
router.get("/users", getUsers);

//get a specific user
router.get("/user", verifyToken, getSpecificUser);

//post a new user
router.post("/users", setUser);





module.exports = router;