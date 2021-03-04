const expressWinston = require('express-winston');
const winston = require('winston');

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    info =>
      `${info.level}: Started${info.message} at ${info.timestamp} \nFinished request with status ${info.meta.res.statusCode}`
  )
);

module.exports = expressWinston.logger({
  format: logFormat,
  transports: [
    new winston.transports.Console({
      json: false,
      colorize: true,
    }),
  ],
});
