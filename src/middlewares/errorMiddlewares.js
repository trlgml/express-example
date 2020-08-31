const config = require('../config');
const isProd = config.get('env') === 'production'

module.exports = function (err, req, res, next) {
  const story = {
    name: err.message,
  }
  if (!isProd) {
    Object.assign(story, {
      originalError: err
    })
  }
  res.status(err.status || 500).json(story)
}