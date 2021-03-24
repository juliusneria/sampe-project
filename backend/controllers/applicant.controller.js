var ApplicantService = require("../services/applicant.service");
module.exports = function(app){
    app.get("/applicant/all", ApplicantService.all);
};