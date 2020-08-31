'use strict';
// const createError = require('http-errors');

module.exports = (asyncHandler) => async (req, res, next) => {
  try {
    await asyncHandler(req, res, next);
  } catch (err) {
    next(err);
  }
}
