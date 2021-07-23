const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/", async (req, res) => {
  // res.send('We are on users');
  try {
    const getAllUsers = await Users.find().exec();
    res.send({ status: 200, data: getAllUsers });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const user = new Users({
    userName: req.body.userName,
    email: req.body.email,
    dataObj: req.body.dataObj,
  });

  try {
    const saveUserData = await user.save();
    res.json({ message: "User data saved successfully...!" });
  } catch (error) {
    res.status(500).json({
      status: error,
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const getByUserId = await Users.findById(req.params.userId);
    if (getByUserId !== null) {
      res.json(getByUserId);
    } else {
      res.json({ message: "User Not Found or Deleted...!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    const getByUserId = await Users.findById(req.params.userId);
    if (getByUserId !== null) {
      await Users.deleteOne({ _id: req.params.userId });
      res.json({ message: "User Deleted...!" });
    } else {
      res.json({ message: "User Already Deleted...!" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const findByUserId = await Users.findById(req.params.userId);
    findByUserId.set(req.body);
    const result = await findByUserId.save();
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
