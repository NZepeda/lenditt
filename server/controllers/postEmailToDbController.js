var mongoose = require('mongoose'),
UserInterestEmail = mongoose.model('UserInterestEmail');

exports.postUserEmailToDb = function(req, res){
    UserInterestEmail.create({email: req.query.email}, function(err, data){
        res.setHeader('Content-Type', 'application/json');
        if(err){
            console.log(err);
            res.status(501).send({results: "Already registered"});
        }
        else{
            res.status(200).send(data);
        }
    });
}

