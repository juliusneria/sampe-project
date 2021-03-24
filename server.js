var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var app = express();
// app.set('superSecret', config.secret);
var compression = require("compression");
app.use(compression());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
var apiRoutes = express.Router();
// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
// require("./app/auth")(apiRoutes, jwt, app);
app.use('/api', apiRoutes);

/*
 * inject backend controllers
 * */
require("./backend/controllers/applicant.controller.js")(app);

app.get("/*", function (req, res) {
    res.sendFile(path.resolve('./app/index.html'));
});

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(8090, function () {
    console.log('ExpressJs started at localhost:8090!');
});

exports = module.exports = app;