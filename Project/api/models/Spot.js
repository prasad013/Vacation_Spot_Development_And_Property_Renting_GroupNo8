const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    // address:{
    //   type: String,
    //   required: true,
    // },
    city:{
      type: String,
      required: true,
    },

    categories: {
      type: Array,
      required: true,
    },
  },
//   { timestamps: true }
);

module.exports = mongoose.model("Spot", SpotSchema);
