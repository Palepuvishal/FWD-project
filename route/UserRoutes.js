const express = require("express");
const {
  HandleLoginController,
  HandleRegisterController,
  HandleUserProfileController,
  HandleAddUserMedicalDataContoller,
  HandleUpdateUserProfileController,
  HandleAllUserDetailsController,
} = require("../controller/UserCtrl");
const Router = express.Router(); // Initialize a new router instance

// Define routes on the Router instance
Router.post("/login", HandleLoginController);
Router.post("/register", HandleRegisterController);
Router.post("/getDataAboutUserProfile", HandleUserProfileController);
Router.post("/getAllUserDetails", HandleAllUserDetailsController);
Router.post("/addMedicalData", HandleAddUserMedicalDataContoller);
Router.post("/updateUserProfile", HandleUpdateUserProfileController);

module.exports = Router; // Export the router instance directly
