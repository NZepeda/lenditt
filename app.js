'use strict'
var express = require('express');
var mongoose = require('mongoose');
var env = require('dotenv').config();
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

// Database credentials
var host = process.env.DB_HOST;
var database = process.env.DB_DATABASE;
var user = process.env.DB_USER;
var pass = process.env.DB_PASSWORD;

var mongoConnection = buildMongoConnection(host, database, user, pass);
var dbOptions = {
    user: user,
    pass: pass
}

mongoose.connect(mongoConnection, dbOptions);

require('./server/models/userInterestEmail');
require('./server/routes.js')(app);

// Start the server
app.listen(port, function(req, res){
    console.log('I\'m listening on port ' + port);
});

function buildMongoConnection(host, database, user, pass){
    return "mongodb://" + user + ":" + pass + "@" + host + "/" + database;
}