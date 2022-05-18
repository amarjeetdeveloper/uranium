const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    authorname: String,
    age: Number,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("myAuthor", authorSchema);
