const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const app = express();
const mainDBRepository = require("./src/repositories/main.repository");

mainDBRepository.connect();
app.mainDBRepository = mainDBRepository;

// Enable cors for public access
app.use(cors());

// JSON parsing
app.use(express.json());

// Other request types parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Remove express header
app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

// API requests routing
app.use("/", router);

module.exports = app;
