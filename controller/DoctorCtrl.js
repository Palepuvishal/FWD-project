const DoctorModel = require("../model/Doctormodel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { HandleUpdateUserProfileController } = require("./UserCtrl.js");
dotenv.config();

async function HandleLoginController(req, res) {
  try {
    console.log("inside HandleLoginController successful login");
    const alreadypresent = await DoctorModel.findOne({ email: req.body.email });
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
      {
        id: alreadypresent._id,
        name: alreadypresent.name,
        email: req.body.email,
        role: "DOCTOR",
      },
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
    const alreadypresent = await DoctorModel.findOne({ email: req.body.email });
    if (alreadypresent) {
      console.log("Already present");
      return res
        .status(200)
        .send({ success: true, message: `User already existed` });
    }
    const salt = await bcrypt.genSalt(10); //to create a secure password
    const hashedpassword = await bcrypt.hash(req.body.password, salt); //hashing the password
    req.body.password = hashedpassword; //replacing the req password to hashedpasswor

    // const newUser = new DoctorModel(req.body);
    // const savedUser = await newUser.save();
    const newUser = DoctorModel.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      role: "DOCTOR",
    });

    // const newUser = await DoctorModel.create({
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

async function HandleDoctorDetailsController(req, res) {
  try {
    console.log("inside doctordetails");
    const doctorDetails = await DoctorModel.find({});
    console.log(doctorDetails);
    return res.send({
      success: true,
      message: `details are sent `,
      doctorDetails,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `doctor details controller ${error.message}`,
    });
  }
}

// This function handles the connection of a user to a selected doctor by updating the user's appointed doctors list in the database.
//  It retrieves the doctor's ID from the request body, finds the user in the database, adds the doctor's ID to the user's list of appointed doctors,
//  and saves the updated user information. In case of an error, it sends a 500 status response with an error message.

async function HandleConnectUserToDoctorController(req, res) {
  try {
    const doctorSelected = req.body.doctorid;
    const user = await UserModel.findById(req.user.id);
    user.appointedTo.push(doctorSelected._id);
    await user.save();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `doctor details controller ${error.message}`,
    });
  }
}

async function HandleUpdateDoctorProfileController(req, res) {
  try {
    const user = req.user;
    const updatedDetails = req.body;

    if (!user) {
      return res.status(401).send({ success: false, message: `no user found` });
    }

    if (!updatedDetails) {
      return res
        .status(202)
        .send({ success: false, message: `no details are sent` });
    }

    console.log(updatedDetails);

    const doctorDetails = await DoctorModel.findOneAndUpdate(
      { _id: user.id },
      updatedDetails,
      { new: true }
    );

    if (!doctorDetails) {
      return res.status(401).send({ success: false, message: `no user found` });
    }

    return res.status(200).send({
      success: true,
      message: `successfully updated`,
      user: doctorDetails,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: `internal error ${error.message}` });
  }
}
module.exports = {
  HandleLoginController,
  HandleRegisterController,
  HandleDoctorDetailsController,
  HandleConnectUserToDoctorController,
  HandleUpdateDoctorProfileController,
};
