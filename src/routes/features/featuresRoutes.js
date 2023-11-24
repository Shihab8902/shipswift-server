const { getFeatures } = require("../../controllers/features/featuresController");

const router = require("express").Router();


//Get features
router.get("/features", getFeatures);



module.exports = router;