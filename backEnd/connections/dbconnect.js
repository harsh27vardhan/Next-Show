const express = require("express");
const mongoose = require("mongoose");

exports.connectToDB = (databaseName = "nextShow") => {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => {
      console.log(`Connected to MongoDB: ${databaseName}`);
    })
    .catch((err) => console.log(err));
};
