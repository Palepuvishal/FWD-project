const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Doctorschema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },

  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "this email is already used "],
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
  },
  address: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
  specialization: {
    type: String,
  },
  qualification: {
    type: String,
  },
  experience: {
    type: Number,
  },
  InstituteStudied: {
    type: String,
  },
});

const DoctorModel = mongoose.model("Doctor", Doctorschema);

module.exports = DoctorModel;
