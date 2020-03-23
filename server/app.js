require("dotenv").config();

// Dependencies
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

// Cross Domain CORS whitlist
const whitelist = ["http://localhost:3000", "http://localhost:1234"];
const corsOptions = {
  origin: function(origin, callback) {
    console.log(`Origin: ${origin}`);
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

// Middleware Setup
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Data
const phoneData = require("./public/data/phones.json");

// Endpoints
app.use("/phones", (req, res) => {
  res.json(phoneData);
});
app.use("/", (req, res) => {
  res.json({ status: "Welcome to the Phone Catalogue app" });
});

module.exports = app;
