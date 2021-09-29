const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
