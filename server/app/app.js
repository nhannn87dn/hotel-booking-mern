const express = require("express");
const hpp = require("hpp");
const toobusy = require("toobusy-js");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const compression = require("compression");
const { cpuPercentage, rateLimit, errorHandler } = require("./middlewares");
const { requestLogger } = require("../config/logger");
const router = require('../routes/v1');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const bodyParser = require('body-parser');

// initialize express
const app = express();

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res,next) {
  console.log('bodyParser',req);
  next()
})

// logger
app.use(requestLogger);

//Prevent HTTP Parameter Pollution
app.use(hpp());
// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());
app.use(mongoSanitize());


// public for upload files
app.use(express.static(path.join(__dirname, '../public')));



// compress all responses
app.use(compression());

// Allow Cross-Origin requests
app.use(cors());
app.options("*", cors());

//Security Middleware for backend infrastructure

app.use(
  helmet.frameguard(),
  helmet.hsts(),
  helmet.noSniff(),
  helmet.dnsPrefetchControl(),
  helmet.ieNoOpen(),
  helmet.referrerPolicy(),
  helmet.xssFilter(),
  helmet.hidePoweredBy()
);
// Rate limitter for DDOS attacks
app.use(rateLimit());


//Server Overload Notifier
app.use((req, res, next) => {
  if (toobusy()) {
    // log if you see necessary
    console.log(cpuPercentage());
    res.send(503, "Server Too Busy");
  } else {
    next();
  }
});


/// Initialize the route handling
app.use('/api',router);

/// Catch 404 and forward to error handler
app.use(errorHandler.notFound);

/// Error handler
app.use(errorHandler.returnError);
module.exports = app;
