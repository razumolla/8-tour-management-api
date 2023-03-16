const express = require("express");
const router = express.Router();
const toursController = require("../controllers/tours.controller");

router
  .route("/")
  .get(toursController.getTours)
  .post(toursController.createTours);
router
  .route("/:id")
  .get(toursController.getToursById)

module.exports = router;
