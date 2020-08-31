const { client } = require('../connection/redis')

const getHomeCache = async (key) => {
  const story = client.get(key)
  return story
}

const setHomeCache = async (key, data) => {
  client.set(key, data)
}

module.exports = {
  getHomeCache,
  setHomeCache
}