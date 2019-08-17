var express = require("express");
var bodyParser = require("body-parser");

// !TODO : Fix this up once we have a final landing copy
module.exports = function(app) {
  // *** API Endpoints *** ///
  var emailCollecterController = require("./controllers/postEmailToDbController");
  app.get("/saveEmail", emailCollecterController.postUserEmailToDb);

  // Static mapping redirects
  app.use("/js", express.static(__dirname + "/../client/js"));
  app.use("/css", express.static(__dirname + "/../landing/styles"));
  app.use("/scripts", express.static(__dirname + "/../node_modules"));
  app.use("/color", express.static(__dirname + "/../client/color"));
  app.use("/img", express.static(__dirname + "/../client/img"));
  app.use("/fonts", express.static(__dirname + "/../client/fonts"));
};
