const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const adminRoute = require("./routes/admin");
const usersRoute = require("./routes/users");

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/admin", adminRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("API Working");
});
app.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});
