const { getUsers, setUser } = require("../../controllers/users/usersController");

const router = require("express").Router();

//get all users
router.get("/users", getUsers);
router.post("/users", setUser);



module.exports = router;