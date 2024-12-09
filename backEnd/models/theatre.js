const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  screens: [
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies",
      },
      timings: {
        type: String,
        required: true,
      },
      seats: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const theatreSchema = mongoose.model("user", schema);
module.exports = theatreSchema;

sampleTheatre = {
  name: "RR Cinema",
  loaction: "Roorkee",
  rating: 4.5,
  screens: [],
};

sampleScreen = {
  // "movie": "id_of_movie",
  name: "Audi Eklavya",
  timings: "10:00 AM - 12:00 PM",
  seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  price: 150,
};
