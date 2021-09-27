const express = require("express");
const router = express.Router();
const postSchema = require("../models/Post");
router.get("/", (req, res) => {
  res.send("we are on post route");
});

router.post("/", (req, res) => {
  const post = new postSchema({
    title: req.body.title,
    desc: req.body.desc,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});
module.exports = router;
