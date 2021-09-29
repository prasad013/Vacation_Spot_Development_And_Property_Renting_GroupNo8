const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Book = require("../models/Book");

//CREATE POST
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  //   const username = req.query.user;

  try {
    let books;
    books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
