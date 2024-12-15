const express = require("express");
const router = express.Router();
const userController = require('../contollers/user.auth.controller.js');
const { body } = require("express-validator");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname").isLength({ min: 3 }).withMessage("First Name must be at least 3 character long"),
],userController.registerUser);

module.exports = router;