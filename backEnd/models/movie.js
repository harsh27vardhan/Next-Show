const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  reating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  addedByUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const movieSchema = mongoose.model("user", schema);
module.exports = movieSchema;
