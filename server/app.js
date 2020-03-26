require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();

const whitelist = [`http://localhost:${process.env.SERVER_PORT || 3000}`, `http://localhost:${process.env.CLIENT_PORT || 1234}`, "http://localhost:1212"];
const corsOptions = {
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

const phoneData = require("./public/data/phones.json");
for (let phone of phoneData) {
  phone.imageUrl = `http://localhost:${process.env.SERVER_PORT || 3000}/images/${phone.imageUrl}`;
}

app.use("/phones", (req, res) => {
  setTimeout(() => res.json(phoneData), 500);
});
app.use("/", (req, res) => {
  res.json({ status: "Welcome to the Phone Catalogue app" });
});

module.exports = app;
