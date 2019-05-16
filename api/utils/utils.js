function wrapAsync(fn) {
   return function(req, res, next) {
      fn(req, res, next).catch(next);
   };
}

let utils = {
   wrapAsync: wrapAsync
};

module.exports = utils;
