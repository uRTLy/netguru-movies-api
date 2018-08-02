const winston = require('winston');
const isDev = require('./isDev');

const logger = winston.createLogger({});

function log(message) {
  if (isDev()) {
    winston.log(message);
  }
}

module.exports = log;
