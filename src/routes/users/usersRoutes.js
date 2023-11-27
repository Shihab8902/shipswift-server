const { getUsers, setUser, getSpecificUser, updateProfilePicture, getTotalUserCount, updateUserRole, updateDeliveryMan } = require("../../controllers/users/usersController");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

//get all users
router.get("/users", verifyToken, verifyAdmin, getUsers);

//get a specific user
router.get("/user", verifyToken, getSpecificUser);

//get total user count
router.get("/users/total", getTotalUserCount);


//post a new user
router.post("/users", setUser);

//Update user profile picture
router.put("/users", verifyToken, updateProfilePicture);

//Update user role
router.put("/admin/users", verifyToken, verifyAdmin, updateUserRole);

//update delivery man info
router.put("/delivery/users", verifyToken, updateDeliveryMan)





module.exports = router;