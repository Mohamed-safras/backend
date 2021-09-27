const mongooes = require("mongoose");

const postSchema = mongooes.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  comments: [],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongooes.model("Posts", postSchema);
