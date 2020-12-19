const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const BASE_URL = "/userManagement/v1.0";
const mongoose = require("mongoose");


// For logging the requests using morgan

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.h6uil.mongodb.net/octopus_backend?retryWrites=true&w=majority",
  { useMongoClient: true }
);

// Error mapping for the routes not found

app.use((req, res, next) => {
  const error = new Error("Endpoint Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
