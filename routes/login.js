const express = require("express");
const { get } = require("express/lib/request");
const router = express.Router();

const authController = require("../controller/AuthController");
const verifyURL = require("../middleware/VerifyURL");
const authValidator = require("../validator/authValidator");

router.get("/", [verifyURL.handlePreLogin], authController.getLoginForm);

router.post("/", authValidator.postLogin, authController.login);

module.exports = router;
