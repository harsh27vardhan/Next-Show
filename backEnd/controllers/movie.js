const movieSchema = require("../models/movie");
exports.getAllMovies = (req, res) => {
  try {
    movieSchema.find({}).then((movies) => {
      res.status(200).json({
        success: true,
        data: movies,
      });
    });
  } catch {}
};

exports.createMovie = (req, res) => {};
