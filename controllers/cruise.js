const {
  REGIONS_LIST,
  COUNTRY_LIST,
  PORT_LIST,
  CRUISELINE_LIST,
  SHIPS_LIST,
  SEARCH_RESULT,
  CRUISE_DETAILS,
} = require("../models/mockups");

const getAllDestination = async (req, res) => {
  const lists = REGIONS_LIST;
  res.status(200).json(lists);
};

const getAllCountry = async (req, res) => {
  const lists = COUNTRY_LIST;
  res.status(200).json(lists);
};

const getAllPort = async (req, res) => {
  const lists = PORT_LIST;
  res.status(200).json(lists);
};

const getAllCruiseLine = async (req, res) => {
  const lists = CRUISELINE_LIST;
  res.status(200).json(lists);
};

const getAllCruiseShip = async (req, res) => {
  const lists = SHIPS_LIST;
  res.status(200).json(lists);
};

const getCruiseSearchResults = async (req, res) => {
  const result = SEARCH_RESULT;
  res.status(200).json(result);
};

const getCruiseDetails = async (req, res) => {
  const result = CRUISE_DETAILS;
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
};
