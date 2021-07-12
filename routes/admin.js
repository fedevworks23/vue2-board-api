const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

router.get("/", async (req, res) => {
  try {
    const getUserData = await Admin.find().exec();
    res.send({ status: 200, body: getUserData });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

router.post("/", async (req, res) => {
  const saveUserData = new Admin({
    userType: req.body.userType,
    dataObj: req.body.dataObj,
  });
  try {
    await Admin.findOneAndUpdate(
      { userType: saveUserData.userType },
      { dataObj: saveUserData.dataObj },
      function (err, user) {
        // if (user.userType === "user") {
        //   console.log("User ==>", user);
        // } else if (user.userType === "admin") {
        //   console.log("Admin ==>", user);
        // }
        if (err) {
          return done(err);
        } else {
          res.json(saveUserData);
        }
      }
    );
  } catch (error) {
    response.status(500).json({ message: error });
  }
});

module.exports = router;
