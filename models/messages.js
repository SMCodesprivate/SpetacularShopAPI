const mongoose = require("mongoose");

const messages = mongoose.Schema({
  author: String,
  date: Object,
  content: String,
  id: Number,
  avatarURL: String
});

module.exports = mongoose.model('Messages', messages);