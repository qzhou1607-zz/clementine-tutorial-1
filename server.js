'use strict';
var express = require('express');
var routes = require('./app/routes/index.js');
var port = process.env.PORT;
var app = express();
var mongoose = require('mongoose');
var path = require('path');

var dbUrl = 'mongodb://localhost:27017/clementinejs';

mongoose.connect(dbUrl);

app.use('/public', express.static(path.join(__dirname,'public')));
app.use('/controllers', express.static(path.join(__dirname,'app/controllers')));


routes(app);

app.listen(port, function() {
  console.log('Listening');
});

