const express = require("express");
const router = express.Router();
const toursController = require("../controllers/tours.controller");

router
  .route("/")
  .get(toursController.getTours)
  .post(toursController.createTours);

router.route("/trending").get(toursController.getTrendingTours);

router
  .route("/:id")
  .get(toursController.getToursById)
  .patch(toursController.updateTourById);

module.exports = router;
