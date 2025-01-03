const express = require("express");
const {
  HandleLoginController,
  HandleRegisterController,
  HandleDoctorDetailsController,
  HandleConnectUserToDoctorController,
  HandleUpdateDoctorProfileController,
} = require("../controller/DoctorCtrl");
const Router = express.Router(); // Initialize a new router instance

// Define routes on the Router instance
Router.post("/login", HandleLoginController);
Router.post("/register", HandleRegisterController);
Router.post("/getAllDoctorDetails", HandleDoctorDetailsController);
Router.post("/connectUserToDoctor", HandleConnectUserToDoctorController);
Router.post("/updateDoctorProfile", HandleUpdateDoctorProfileController);

module.exports = Router; // Export the router instance directly
