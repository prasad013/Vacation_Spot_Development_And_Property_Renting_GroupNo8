const router = require("express").Router();
const User = require("../models/User");
const Review = require("../models/Review");

//CREATE POST
router.post("/", async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Review.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Review.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Review.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Review.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your property!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Review.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  //   const username = req.query.user;

  try {
    let spots;
    spots = await Review.find();
    res.status(200).json(spots);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
