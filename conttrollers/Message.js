const mongoose = require("mongoose"),
Messages = require("../models/messages");

module.exports = {
  async store(req, res) {
    var msgs = await Messages.find();
    var { content, user_name, date } = req.body;
    const msg = await Messages.create({
      author: user_name,
      avatarURL: "https://i.ibb.co/fkMp2MY/image.png",
      date,
      content,
      id: msgs.length
    });
    return res.json(msg);
  },
  async delete(req, res) {
    var { msg_id } = req.body;
    
    var msg = await Messages.findOneAndRemove({ id: msg_id });
    
    return res.json(msg);
  },
  async index(req, res) {
    var msgs = await Messages.find();
    return res.json(msgs);
  }
}