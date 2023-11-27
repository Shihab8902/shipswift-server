const { getAllReview, postReview } = require("../../controllers/review/reviewController");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();


//get all reviews by user
router.get("/review", verifyToken, getAllReview);

//get user specific reviews

//post a new review
router.post("/review", verifyToken, postReview);


module.exports = router;