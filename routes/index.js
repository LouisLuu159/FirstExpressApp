var express = require("express");
var router = express.Router();

const verifyURL = require("../middleware/VerifyURL");
const HomeController = require("../controller/HomeController");
/* GET home page. */
router.get("/", [verifyURL.handlePreIndex], HomeController.getHomePage);

module.exports = router;
