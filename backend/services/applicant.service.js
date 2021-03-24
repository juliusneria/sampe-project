var Applicant = require("../models/applicant");
var natural = require('natural');
var classifier = new natural.BayesClassifier();
var textract = require('textract');
var Tokenizer = require('sentence-tokenizer');
var token = new Tokenizer('Chuck');
var tokenizer = new natural.WordTokenizer();

module.exports = {
    all: function(req, res){
        Applicant.find({}, function(err, result){
            res.json([
                {
                    name: 'maica',
                    position: 'soft dev',
                    rank: '20'
                },
                {
                    name: 'ronald',
                    position: 'soft dev',
                    rank: '20'
                },
                {
                    name: 'java',
                    position: 'soft dev',
                    rank: '20'
                },{
                    name: 'chris',
                    position: 'soft dev',
                    rank: '20'
                }
            ]);
        });
    }
};