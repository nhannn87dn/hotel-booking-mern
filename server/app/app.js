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

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// POST /login gets urlencoded bodies
app.post('/up', function (req, res) {
  console.log('bodyParser',req);
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/jp', function (req, res) {
  res.send('welcome, ' + req.body.username)
});
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
