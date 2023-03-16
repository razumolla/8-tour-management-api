const Tour = require("../models/Tour");
const { getToursService, createToursService } = require("../services/tours.service");

exports.getTours = async (req, res, next) => {
  try {
    const tours = await getToursService();
    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: " failed",
      message: "can't get tours data",
      error: error.message,
    });
  }
};
exports.createTours = async (req, res, next) => {
  try {
    console.log("tour", req.body);
    const result = await createToursService(req.body);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
