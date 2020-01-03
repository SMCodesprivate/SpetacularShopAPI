const express = require("express"),
routes = express.Router(),
Message = require("./conttrollers/Message"),
User = require("./conttrollers/User");

// routes.get('/area', local);
routes.post('/newmessage', Message.store);
routes.post('/removemessage', Message.delete);
routes.get('/messages', Message.index);
routes.post('/newuser', User.register);

module.exports = routes;