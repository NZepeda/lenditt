var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var userInterestEmail = new Schema({
    email: {type: String, unique: true}
});

mongoose.model('UserInterestEmail', userInterestEmail);