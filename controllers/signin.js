const {  SIGN_IN } = require("../models/mockups");

const getSignin = async (req, res) => {
  const lists = SIGN_IN;
  res.status(200).json(lists);
};


module.exports = {
  getSignin
};
