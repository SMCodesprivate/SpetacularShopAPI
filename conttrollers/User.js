const mongoose = require("mongoose"),
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10,
Users = require('../models/users.js');

module.exports = {
  async register(req, res) {
    var { email, password, name } = req.body;
    var ve = await Users.findOne({ email });
    if(ve !== null) return res.json({ error: "Um usuário com esse erro já está registrado." });
    ve = await Users.findOne({ name });
    if(ve !== null) return res.json({ error: "Um usuário com esse nome já está registrado." });
    var user_id = await Users.find().lenth;
    var senha = await encrypt(password);
    var create = await Users.create({
      name: name,
      avatarURL: "https://i.ibb.co/fkMp2MY/image.png",
      id: user_id,
      permission: 0,
      email: email,
      password: senha
    })
    return create;
  },
  async login(req, res) {
    var { name } = req.body;
  }
};
async function encrypt(password) {
  var salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  var senha = await bcrypt.hash(password, salt);
  return senha;
}
async function verify(password, password_2) {
  var salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  var x = await bcrypt.hash(password, salt);
  var compare = await bcrypt.compare(password_2, password);
  return compare;
}