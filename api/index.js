var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/recipeDev');

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(express.json());
app.use(bodyParser.json());
app.use('/', routes);