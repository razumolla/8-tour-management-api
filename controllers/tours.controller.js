const Tour = require("../models/Tour");
const {
  getToursService,
  createToursService,
  getTourServiceById,
  updateToursServiceById,
  getTrendingTourService,
} = require("../services/tours.service");

exports.getTours = async (req, res, next) => {
  try {
    // gater than ,less than .... operator......
    let filters = { ...req.query };
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    let filterString = JSON.stringify(filters);
    filterString = filterString.replace(
      /\b(gt|gte|lte|lt|ne|eq|in)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filterString);

    // QueryBy: fields, sortBy, limit, page
    const queries = {};
    if (req.query.fields) {
      // search query: fields=name,image --> output: sortBy: "name image"
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.sort) {
      // search query: sort=name,price --> output: sortBy: "name image"
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    //   -- paigination -----
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query; // input page: "5", limit: "10"
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const tours = await getToursService(filters, queries);
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

exports.getToursById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tour = await getTourServiceById(id);
    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: " failed",
      message: "can't get single tours data",
      error: error.message,
    });
  }
};

exports.createTours = async (req, res, next) => {
  try {
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

exports.updateTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateToursServiceById(id, req.body);

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

exports.getTrendingTours = async (req, res, next) => {
  try {
    const result = await getTrendingTourService();

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
