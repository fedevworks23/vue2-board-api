const express = require("express");
const router = express.Router();
const Table = require("../models/Table");

router.get("/", async (req, res) => {
  try {
    const getUserData = await Table.find().exec();
    res.send({ status: 200, body: getUserData });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const saveUserData = new Table({
    username: req.body.username,
    dataObj: req.body.dataObj,
  });
  try {
    const userData = await saveUserData.save();
    res.json(userData);
  } catch (error) {
    response.status(500).json({ message: error });
  }
});

module.exports = router;
