const express = require("express");
const router = express.Router();
const { getAllDestination, getAllCountry, getAllPort, getAllCruiseLine, getAllCruiseShip, getCruiseSearchResults } = require("../controllers/cruise");

router.route("/regions").get(getAllDestination);
router.route("/country").get(getAllCountry);
router.route("/port").get(getAllPort);
router.route("/cruiseline").post(getAllCruiseLine);
router.route("/ships").post(getAllCruiseShip);
router.route("/search").post(getCruiseSearchResults);

module.exports = router;
