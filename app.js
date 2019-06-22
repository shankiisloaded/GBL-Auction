// Get dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');

// Connecting to Mongo Local
require('./server/init/db');
const eth = require('./server/controller/ethereumController/ethController');
eth.init();
//Intialise the ServerRouter for routing
const serverRouter = require('./server/serverRouter');

//Import the app driver


//Specify the module as express app.
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/dist/GBL-Auction')));
app.use('/', express.static(path.join(__dirname, '/dist/GBL-Auction')));


// Get our API routes
app.use('/api', serverRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});
require('./server/model/TeamManager');
module.exports = app;
