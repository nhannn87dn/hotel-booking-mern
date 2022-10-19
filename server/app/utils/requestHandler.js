const logger = require("../../config/logger");
const _ = require("lodash");
/**
 * Tiện ích trả về response chung 1 cấu trúc
 */

const sendSuccess = (res, message, code, status) => {
  logger.info(
    `a request has been made and proccessed successfully at: ${new Date()}`
  );
  return (data, globalData) => {
    if (_.isUndefined(code)) {
      code = 200;
    }
    res.status(code).json({
      status: code,
      message: message || "Success result",
      data,
      ...globalData,
    });
  };
};

const sendError = (req, res, error) => {
  logger.error(
    `error ,Error during processing request: ${`${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`} details message: ${error.message}`
  );
  return res.status(error.status || 500).json({
    status: error.status || 500,
    message: error.message || error.message || "Unhandled Error",
    error,
  });
};

module.exports = {
  sendError,
  sendSuccess,
};
