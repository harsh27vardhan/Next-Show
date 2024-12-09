const mongoose = require("mongoose");

const schema = mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatre",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  bookedAt: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED"],
    default: "CONFIRMED",
  },
  screen: {
    // Gives the name of the screen from the theatre model.
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  seats: {
    type: [Number],
    required: true,
  },
});

const bookingSchema = mongoose.model("user", schema);
module.exports = bookingSchema;
