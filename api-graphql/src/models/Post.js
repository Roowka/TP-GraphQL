const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  author: String,
  link: String
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
