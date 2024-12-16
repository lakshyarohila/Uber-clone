const express = require("express");
const router = express.Router();
const userController = require('../contollers/user.auth.controller.js');
const { body } = require("express-validator");
const authMiddlerware = require('../middlewares/auth.middleware.js'); 

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname").isLength({ min: 3 }).withMessage("First Name must be at least 3 character long"),
],userController.registerUser);

router.post('/login',[body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:3}).withMessage('Password Must be 6 Character long')
],userController.loginUser);

router.get('/profile',authMiddlerware.authUser,userController.userProfile);

router.get('/logout',authMiddlerware.authUser,userController.logoutUser)

module.exports = router;
