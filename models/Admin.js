const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
    unique: true,
  },
  dataObj: {
    type: Object,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
