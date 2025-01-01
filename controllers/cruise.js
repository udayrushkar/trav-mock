const {
  REGIONS_LIST,
  COUNTRY_LIST,
  PORT_LIST,
  CRUISELINE_LIST,
  SHIPS_LIST,
  SEARCH_RESULT,
  CRUISE_DETAILS,
  CRUISE_CABIN,
  CRUISE_CABIN_GRADES,
  CRUISE_CABIN_BASKET_ADD,
  CRUISE_CABIN_GRADE_BREAKDOWN,
  CRUISE_CABIN_BOOK,
  GET_POPULAR_PORTS,
  GET_POPULAR_DESTINATION,
  GET_CRUISE_REVIEW_RATING,
} = require("../models/mockups");

// Helper function to simulate a 2-second delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getAllDestination = async (req, res) => {
  await delay(2000); // 2-second delay
  const lists = REGIONS_LIST;
  res.status(200).json(lists);
};

const getAllCountry = async (req, res) => {
  await delay(2000); // 2-second delay
  const lists = COUNTRY_LIST;
  res.status(200).json(lists);
};

const getAllPort = async (req, res) => {
  await delay(2000); // 2-second delay
  const lists = PORT_LIST;
  res.status(200).json(lists);
};

const getAllCruiseLine = async (req, res) => {
  await delay(2000); // 2-second delay
  const lists = CRUISELINE_LIST;
  res.status(200).json(lists);
};

const getAllCruiseShip = async (req, res) => {
  await delay(2000); // 2-second delay
  const lists = SHIPS_LIST;
  res.status(200).json(lists);
};

const getCruiseSearchResults = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = SEARCH_RESULT;
  res.status(200).json(result);
};

const getCruiseDetails = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_DETAILS;
  res.status(200).json(result);
};

const getCruiseCabin = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_CABIN;
  res.status(200).json(result);
};

const getCruiseCabinGrades = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_CABIN_GRADES;
  res.status(200).json(result);
};

const cruisecabinbasketadd = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_CABIN_BASKET_ADD;
  res.status(200).json(result);
};

const cruisecabingradebreakdown = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_CABIN_GRADE_BREAKDOWN;
  res.status(200).json(result);
};

const cruisecabinbook = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = CRUISE_CABIN_BOOK;
  res.status(200).json(result);
};

const getpopularport = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = GET_POPULAR_PORTS;
  res.status(200).json(result);
};

const getpopulardestination = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = GET_POPULAR_DESTINATION;
  res.status(200).json(result);
};

const getcruisereviewrating = async (req, res) => {
  await delay(2000); // 2-second delay
  const result = GET_CRUISE_REVIEW_RATING;
  res.status(200).json(result);
};

module.exports = {
  getAllDestination,
  getAllCountry,
  getAllPort,
  getAllCruiseLine,
  getAllCruiseShip,
  getCruiseSearchResults,
  getCruiseDetails,
  getCruiseCabin,
  getCruiseCabinGrades,
  cruisecabinbasketadd,
  cruisecabingradebreakdown,
  cruisecabinbook,
  getpopularport,
  getpopulardestination,
  getcruisereviewrating
};
