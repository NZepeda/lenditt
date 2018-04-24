'use strict'
var express = require('express');
var mongoose = require('mongoose');
var env = require('dotenv').config();
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Database credentials
var host = process.env.DB_HOST;
var database = process.env.DB_DATABASE;
var user = process.env.DB_USER;
var pass = process.env.DB_PASSWORD;

var mongoConnection = buildMongoConnection(host, database, user, pass);
var dbOptions = {
    useMongoClient: true
}

mongoose.connect(mongoConnection, dbOptions);

require('./server/models/userInterestEmail');
require('./server/routes.js')(app);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start the server
app.listen(port, function(req, res){
    console.log('I\'m listening on port ' + port);
});

function buildMongoConnection(host, database, user, pass){
    return "mongodb://" + user + ":" + pass + "@" + host + "/" + database;
}