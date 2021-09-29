const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
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
    username: {
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    city:{
      type: String,
      required: true,
    },
    charges:{
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: false,
    },
    phone:{
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
