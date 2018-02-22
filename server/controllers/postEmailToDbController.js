var mongoose = require('mongoose'),
UserInterestEmail = mongoose.model('UserInterestEmail');

var Slack = require('slack-node');

exports.postUserEmailToDb = function(req, res){
    UserInterestEmail.create({email: req.query.email}, function(err, data){
        res.setHeader('Content-Type', 'application/json');
        if(err){
            console.log(err);
            res.status(501).send({results: "Already registered"});
        }
        else{
            res.status(200).send(data);
            //postToSlack("New user email added: " + req.query.email);
        }
    });
}

function postToSlack(text){
    webhookUri = "https://hooks.slack.com/services/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";

    slack = new Slack();
    slack.setWebhook(webhookUri);

    slack.webhook({
        channel: "#website-email-signups",
        username: "LendittBot",
        icon_imoji: ":robot_face:",
        text: text
    }, function(err, response) {
        console.log(response);
    });
}

