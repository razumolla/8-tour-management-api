const Tour = require("../models/Tour");

exports.getToursService = async (queries) => {
  const tours = await Tour.find({}).select(queries.fields).sort(queries.sortBy);

  return tours;
};
exports.createToursService = async (data) => {
  const tours = await Tour.create(data);
  return tours;
};
