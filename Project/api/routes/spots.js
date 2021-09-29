const router = require("express").Router();
// const User = require("../models/User");
const Spot = require("../models/Spot");

//ADD SPOT
router.post("/", async (req, res) => {
  const newSpot = new Spot(req.body);
  try {
    const savedSpot = await newSpot.save();
    res.status(200).json(savedSpot);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SPOT
router.put("/:id", async (req, res) => {
  try {
    const spot = await spot.findById(req.params.id);
    if (spot.username === req.body.username) {
      try {
        const updatedSpot = await Spot.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedSpot);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You cannot update the spot");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE SPOT
router.delete("/:id", async (req, res) => {
  try {
    const spot = await Spot.findById(req.params.id);
    if (spot.username === req.body.username) {
      try {
        await spot.delete();
        res.status(200).json("spot has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You cannot delete spot!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPOT
router.get("/:id", async (req, res) => {
  try {
    const spot = await Spot.findById(req.params.id);
    res.status(200).json(spot);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SPOT
router.get("/", async (req, res) => {   
//   const username = req.query.user;
  const catName = req.query.cat;
  try {
    let spots;
    // if (username) {
    //   posts = await Post.find({ username });
    // } else 
    if (catName) {
      spots = await Spot.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      spots = await Spot.find();
    }
    res.status(200).json(spots);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
