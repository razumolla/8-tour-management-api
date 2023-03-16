const express = require("express");
const router = express.Router();
const toursController = require("../controllers/tours.controller");

router
  .route("/")
  .get(toursController.getTours)
  .post(toursController.createTours);

module.exports = router;
