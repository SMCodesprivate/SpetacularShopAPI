const express = require("express"),
routes = require("./routes"),
app = express(),
mongoose = require("mongoose"),
cors = require("cors");

app.use(express.static("public"));

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@shop-x5pvn.gcp.mongodb.net/spetacular-shop', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.use(cors());

app.use(express.json());

app.use(routes);
app.get("/", function(req, res) {
  return res.send("Olá, a API está viva");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
