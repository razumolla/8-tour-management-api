const Tour = require("../models/Tour");

exports.getToursService = async (filters, queries) => {
  const tours = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return tours;
};

exports.getTourServiceById = async (tourId) => {
  const tour = await Tour.findById(tourId);

  // Increase the view count by 1 for this tour every time a user hits this endpoint.
  const views = tour.viewCount;
  tour.viewCount = views + 1;
  await tour.save();

  return tour;
};

exports.createToursService = async (data) => {
  const tours = await Tour.create(data);
  return tours;
};
exports.updateToursServiceById = async (tourId, data) => {
  const result = await Tour.updateOne(
    { _id: tourId },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};
