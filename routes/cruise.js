const express = require("express");
const router = express.Router();
const { getAllDestination, getAllCountry, getAllPort, getAllCruiseLine, getAllCruiseShip, getCruiseSearchResults,getCruiseDetails, getCruiseCabin, getCruiseCabinGrades, cruisecabinbasketadd, cruisecabingradebreakdown, cruisecabinbook } = require("../controllers/cruise");

router.route("/master/regions").get(getAllDestination);
router.route("/master/country").get(getAllCountry);
router.route("/master/port").get(getAllPort);
router.route("/master/cruiseline").post(getAllCruiseLine);
router.route("/master/ships").post(getAllCruiseShip);
router.route("/availability/search").post(getCruiseSearchResults);
router.route("/availability/cruisedetails").post(getCruiseDetails);
router.route("/availability/cruisecabingrades").post(getCruiseCabinGrades);
router.route("/cruisecabin").post(getCruiseCabin);
router.route("/cruisecabinbasketadd").post(cruisecabinbasketadd);
router.route("/cruisecabingradebreakdown").post(cruisecabingradebreakdown);
router.route("/cruisecabinbook").post(cruisecabinbook);
router.route("/getpopularport").post(getpopularport);
router.route("/getpopulardestination").post(getpopulardestination);

module.exports = router;
