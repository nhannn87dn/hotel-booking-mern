const rateLimit = require("express-rate-limit");
rateLimit({
  windowMs: 60 * 60 * 1000, //  1 hour
  max: 5000, //Maximum number of requests user can make in the given interval
  message: "Too many accounts created from this IP, please try again after an hour ", // message to be displayed to user after exhauting the limit
  headers: true,
  statusCode: 429,
  handler: (request, response, next, options) =>
		response.status(options.statusCode).json(options),
});

module.exports = rateLimit;