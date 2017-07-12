var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/index.html'));
    });

    // *** API Endpoints *** ///
    var emailCollecterController = require('./controllers/postEmailToDbController');
    app.get('/saveEmail', emailCollecterController.postUserEmailToDb);

    // Static mapping redirects
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/css', express.static(__dirname + '/../client/css'));
    app.use('/scripts', express.static(__dirname + '/../node_modules'));
    app.use('/color', express.static(__dirname + '/../client/color'));
    app.use('/img', express.static(__dirname + '/../client/img'));
    app.use('/fonts', express.static(__dirname + '/../client/fonts'));
}
