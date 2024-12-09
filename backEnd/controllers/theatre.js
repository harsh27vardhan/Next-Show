const theatreSchema = require("../models/theatre");

exports.getAllTheatres = (req, res) => {
  // Get all theatres from the database
  theatreSchema
    .find({})
    .then((theatres) => {
      res.status(200).send({
        message: "Request granted for getting all the Theatres",
        theatres,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving theatres",
        error: err,
      });
    });
};

exports.createTheatre = (req, res) => {
  const { name, location, rating, screens = [] } = req.body;
  theatreSchema
    .create({ name, location, rating, screens })
    .then((theatre) => {
      res.status(201).send({
        message: "Theatre created successfully",
        theatre,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error creating theatre",
        error: err,
      });
    });
};

exports.getTheatre = (req, res) => {
  const { theatreId } = req.params;
  theatreSchema
    .findById(theatreId)
    .then((theatre) => {
      if (!theatre) {
        return res.status(404).send({
          message: "Theatre not found with id " + theatreId,
        });
      } else {
        return res.status(200).send(theatre);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving theatre with id " + theatreId,
        error: err,
      });
    });
};

exports.editTheatre = (req, res) => {
  const { theatreId } = req.params;
  const { name, location, rating, screens } = req.body;
  theatreSchema.findByIdAndUpdate(
    { theatreId },
    {
      name: name,
      location: location,
      rating: rating,
      screens: screens,
    }
  );
};

exports.deleteTheatre = (req, res) => {
  const { theatreId } = req.params;
  theatreSchema
    .findByIdAndDelete(theatreId)
    .then((theatre) => {
      return res.status(200).send({
        message: "Theatre deleted successfully!",
        theatre,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error deleting theatre with id " + theatreId,
        error: err,
      });
    });
};

exports.getAllScreens = (req, res) => {
  const { theatreId } = req.params;
  // Get all screens
};

exports.createScreen = (req, res) => {
  const { theatreId } = req.params;
  // Create
};

exports.getScreen = (req, res) => {
  const { theatreId, screenId } = req.params;
  theatreSchema.findById(theatreId).then((theatre) => {
    if (!theatre) {
      return res.status(404).send({
        message: "Theatre not found with id " + theatreId,
      });
    } else {
      const screen = theatre?.screens?.find((screen) => screen.id === screenId);
      if (!screen) {
        return res.status(404).send({
          message: "Screen not found with id " + screenId,
        });
      } else {
        return res.status(200).send(screen);
      }
    }
  });
};

exports.editScreen = (req, res) => {
  const { theatreId, screenId } = req.params;
  theatreSchema.findById(theatreId).then((theatre) => {
    if (!theatre) {
      return res.status(404).send({
        message: "Theatre not found with id " + theatreId,
      });
    } else {
      const screen = theatre?.screens?.find((screen) => screen.id === screenId);
      if (!screen) {
        return res.status(404).send({
          message: "Screen not found with id " + screenId,
        });
      } else {
        const {
          movie = screen.movie,
          timings = screen.timings,
          seats = screen.seats,
          price = screen.price,
        } = req.body;
        screen.movie = movie;
        screen.timings = timings;
        screen.seats = seats;
        screen.price = price;
        return res.status(200).send(screen);
      }
    }
  });
  const { movie, timings, seats, price } = req.body;
};
