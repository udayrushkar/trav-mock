const express = require("express");
const router = express.Router();
const { getAllDestination, getAllCountry, getAllPort, getAllCruiseLine, getAllCruiseShip, getCruiseSearchResults,getCruiseDetails, getCruiseCabin, getCruiseCabinGrades, cruisecabinbasketadd, cruisecabingradebreakdown, cruisecabinbook, getpopulardestination, getpopularport, getcruisereviewrating, getnewestboldestbestships, getCruisePromotions, getCruiseBookingSummaryByID } = require("../controllers/cruise");

router.route("/master/regions").get(getAllDestination);
router.route("/master/country").get(getAllCountry);
router.route("/master/port").get(getAllPort);
router.route("/master/cruiseline").post(getAllCruiseLine);
router.route("/master/ships").post(getAllCruiseShip);
router.route("/availability/search").post(getCruiseSearchResults);
router.route("/availability/cruisedetails").post(getCruiseDetails);
router.route("/availability/cruisecabingrades").post(getCruiseCabinGrades);
router.route("/availability/cruisecabin").post(getCruiseCabin);
router.route("/availability/cruisecabinbasketadd").post(cruisecabinbasketadd);
router.route("/availability/cruisecabingradebreakdown").post(cruisecabingradebreakdown);
router.route("/booking/cruisecabinbook").post(cruisecabinbook);
router.route("/getpopularport").post(getpopularport);
router.route("/getpopulardestination").post(getpopulardestination);
router.route("/getcruisereviewrating").get(getcruisereviewrating);
router.route("/getnewestboldestbestships").get(getnewestboldestbestships);
router.route("/getcruisepromotions").get(getCruisePromotions);
router.route("/cruisebookingsummarybyuserid").post(getCruiseBookingSummaryByID);

module.exports = router;
