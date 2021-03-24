var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var applicant = new Schema({
    name: String,
    position: String,
    rank: String,
});

var Applicant = mongoose.model("Applicant", applicant);
module.exports = Applicant;