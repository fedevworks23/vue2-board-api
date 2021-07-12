const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

const user = require("./routes/user");

const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const postRoute = require("./routes/posts");
const registerRoute = require("./routes/registers");
const tableRoute = require("./routes/table");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/user", user);
app.use("/posts", postRoute);
app.use("/register", registerRoute);
app.use("/table", tableRoute);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});
