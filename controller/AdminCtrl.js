const AdminModel = require("../model/Adminmodel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

async function HandleLoginController(req, res) {
  try {
    console.log("inside admin login");
    const alreadypresent = await AdminModel.findOne({ email: req.body.email });
    if (!alreadypresent) {
      return res
        .status(200)
        .send({ success: false, message: `User not found` });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      alreadypresent.password
    );
    if (!isMatch) {
      return res
        .status(200)
        .send({ success: false, message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { id: req.body._id, email: req.body.email, role: "ADMIN" },
      process.env.JWT_SECRET
    );

    return res
      .status(200)
      .send({ success: true, message: "User Found", token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: `Error in UserCtrl ${error.message}` });
  }
}

async function HandleRegisterController(req, res) {
  try {
    const alreadypresent = await AdminModel.findOne({ email: req.body.email });
    if (alreadypresent) {
      console.log("Already present");
      return res
        .status(200)
        .send({ success: true, message: `User already existed` });
    }
    const salt = await bcrypt.genSalt(10); //to create a secure password
    const hashedpassword = await bcrypt.hash(req.body.password, salt); //hashing the password
    req.body.password = hashedpassword; //replacing the req password to hashedpasswor

    const newUser = AdminModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      role: "ADMIN",
    });
    const savedUser = await newUser.save();

    // const newUser = await AdminModel.create({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: hashedpassword,
    // });

    res.status(201).send({ success: true, message: `registration successful` });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: `login controller ${error.message}` });
  }
}

module.exports = {
  HandleLoginController,
  HandleRegisterController,
};
