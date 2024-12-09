const express = require("express");
const { connectToDB } = require("./connections/dbconnect");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movie");
const { checkAuth } = require("./middlewares/auth");
const app = express();

connectToDB("nextShow");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Routes
app.get("/", checkAuth, movieRoute);
app.use("/user", userRoute);

app.listen(8021, () => {
  console.log("Server started on port 8021");
});
