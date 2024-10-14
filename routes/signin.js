const express = require("express");
const router = express.Router();
const { getSignin } = require("../controllers/signin");

router.route("/").post(getSignin);

module.exports = router;
