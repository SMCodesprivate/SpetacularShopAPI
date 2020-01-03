const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: String,
  avatarURL: String,
  id: Number,
  permission: Number,
  email: String,
  password: String
});

module.exports = mongoose.model("Users", users);