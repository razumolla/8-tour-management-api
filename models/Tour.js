const mongoose = require("mongoose");

const toursSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name should be min 3 Character"],
      maxLength: [50, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    location: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      min: [1, "Minimum Duration One Day"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Duration must be an integer",
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", toursSchema);
module.exports = Tour;
