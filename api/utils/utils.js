const log = require('./logging').logger;

function wrapAsync(fn) {
   return function(req, res, next) {
      fn(req, res, next).catch(next);
   };
}

function handleError(error, req, res, next) {
   log.error(error.message);
   res.status(500).json({ message: error.message, status: error.status });
}

let utils = {
   handleError: handleError,
   wrapAsync: wrapAsync
};

module.exports = utils;
