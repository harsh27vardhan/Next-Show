const mongoose = require("mongoose");

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "SUCCESS", "FAILED"],
    default: "PENDING",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  method: {
    type: String,
    enum: ["CASH", "DEBIT_CARD", "CREDIT_CARD", "NETBANKING", "UPI"],
    required: true,
  },
});

const paymentSchema = mongoose.model("user", schema);
module.exports = paymentSchema;
