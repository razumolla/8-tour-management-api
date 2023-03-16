const Tour = require("../models/Tour");

exports.getToursService = async () => {
  const tours = await Tour.find({});
  return tours;
};
exports.createToursService = async (data) => {
  const tours = await Tour.create(data);
  return tours;
};
