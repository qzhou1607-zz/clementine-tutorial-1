'use strict';
var express = require('express');
var routes = require('./app/routes/index.js');
var port = process.env.PORT;
var app = express();
var mongo = require('mongodb').MongoClient;
var path = require('path');

var dbUrl = 'mongodb://localhost:27017/clementinejs';

mongo.connect(dbUrl, function(err,db) {
  if(err) {
    throw new Error('error connecting to db');
  } else {
    console.log('MongoDB successful');
    
    app.use('/public', express.static(path.join(__dirname,'public')));
    app.use('/controllers', express.static(path.join(__dirname,'app/controllers')));
    
    
    routes(app,db);
    
    app.listen(port, function() {
      console.log('Listening');
    });
  }
});

