const express = require("express");
const { getAllMovies, createMovie } = require("../controllers/movie");
const router = express.Router();

router.route("/").get(getAllMovies).post(createMovie);

router.route("/:id").get(getMovie).patch(editMovie).delete(deleteMovie);

module.exports = router;
