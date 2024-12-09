const express = require("express");
const router = express.Router();

router.route("/").get("", getAllTheatres).put("", createTheatre);

router
  .route("/:theatreId")
  .get("", getTheatre)
  .post("", addTheatre)
  .delete("", deleteTheatre);

router
  .route("/:theatreId/screen")
  .get("", getAllScreens)
  .post("", createScreen);

router
  .route("/:theatreId/screen/:screenId")
  .get("", getScreen)
  .post("", addScreen)
  .delete("", deleteScreen);
