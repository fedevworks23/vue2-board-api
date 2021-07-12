const mongoose = require("mongoose");

const TableSchema = mongoose.Schema({
  username: {
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

module.exports = mongoose.model("Table", TableSchema);
