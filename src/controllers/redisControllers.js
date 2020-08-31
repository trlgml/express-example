const { getHomeCache, setHomeCache } = require('../services/redisServices')
const { CACHE_KEY: { HOME } } = require('../constants')

const get = async (req, res, next) => {
  const { key } = req.params
  const story = await getHomeCache(HOME + key)
  res.status(200).json({
    data: story
  })
}

const set = async (req, res, next) => {
  const { key } = req.params
  await setHomeCache(HOME + key, 'ggg')
  res.status(200).send('ok')
}

module.exports = {
  set,
  get
}