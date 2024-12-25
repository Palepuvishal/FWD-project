const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { ConnectMongoDb } = require("./config/Db");
const cors = require("cors");

ConnectMongoDb();

//.env config
dotenv.config();
const app = express();

// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3000/api/v1/Doctor/register",
//   "http://localhost:3000/api/v1/Doctor/login",
//   "http://localhost:3000/api/v1/Patient/login",
//   "http://localhost:3000/api/v1/Patient/register",
//   "http://localhost:3000/api/v1/Admin/login",
// ]; // Add all allowed frontend origins here

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true); // Allow if origin is in the list
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Allow cookies or authorization headers
//   })
// );

// Define allowed origins
const allowedOrigins = [
  "http://localhost:3000", // Local development
];

// Dynamically set CORS headers
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If you're using cookies/auth headers
  })
);

// Set fallback headers for other HTTP methods
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin); // Allow based on request's origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());
app.use(morgan("dev"));

const UserRoute = require("./route/UserRoutes");
const DoctorRoute = require("./route/DoctorRoutes");
const AdminRoute = require("./route/AdminRoutes");
const authMiddleware = require("./middlewares/authentication");
const chatModel = require("./model/ChatModel");
const DoctorModel = require("./model/Doctormodel");
const { UserModel } = require("./model/usermodels");

app.use(authMiddleware);

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/Doctor", DoctorRoute);
app.use("/api/v1/Admin", AdminRoute);
app.post("/api/v1/chat/:id", async (req, res) => {
  try {
    const content = req.body.content;
    const userId = req.user.id; // Extract userId from the request body

    if (!content) {
      return res
        .status(400)
        .send({ success: false, message: "No content in the chat" });
    }

    if (!userId) {
      return res
        .status(400)
        .send({ success: false, message: "No userId provided" });
    }

    const contentEntry = await chatModel.create({
      doctorId: req.params.id,
      content: content,
      userId: userId,
    });

    return res.status(201).send({ success: true, data: contentEntry });
  } catch (error) {
    console.error("Error creating chat entry:", error);
    return res
      .status(500)
      .send({ success: false, message: "Internal Server Error" });
  }
});

app.post("/api/v1/chat/getChatView/:id", async (req, res) => {
  try {
    const userId = req.user.id;

    const content = await chatModel
      .find({
        doctorId: req.params.id,
        userId: userId,
      })
      .populate({
        path: "doctorId",
        select: "name",
        model: DoctorModel,
      })
      .populate({
        path: "userId",
        select: "name",
        model: UserModel,
      })
      .sort({ createdAt: -1 });
    console.log(content);

    return res
      .status(200)
      .send({ success: true, message: "Chat is present.", content });
  } catch (error) {
    console.error("Error retrieving chat messages:", error); // Log the error
    return res.status(500).send({
      success: false,
      message: `Internal server error: ${error.message}`,
    });
  }
});

const port = process.env.PORT || 5000;
0;
app.listen(port, () => {
  console.log(
    `server running at ${process.env.PORT} in ${process.env.DEV_MODE}`.bgCyan
      .black
  );
});
