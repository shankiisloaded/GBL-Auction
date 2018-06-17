// Get dependencies
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');

const serverRouter = require('./server/serverRouter');

// Connecting to Mongo Local
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GBL_AUCTION')
  .then(() => console.log("Local Mongo connection Successful!!"))
  .catch((err)=> console.error(err));

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

module.exports = app;
