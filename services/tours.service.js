const Tour = require("../models/Tour");

exports.getToursService = async (queries) => {
  const tours = await Tour.find({}).select(queries.fields).sort(queries.sortBy);
  return tours;
};

exports.getTourServiceById = async (tourId) => {
  const tour = await Tour.findById(tourId);
  return tour;
};

exports.createToursService = async (data) => {
  const tours = await Tour.create(data);
  return tours;
};
