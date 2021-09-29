const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adhar: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
