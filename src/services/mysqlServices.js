
const model = require('../connection/mysql');
const { Demo } = model

const getDemoList = async () => {
  const story = await Demo.findAll()
  return story
}

const createDemo = async () => {
  const story = await Demo.create()
  return story
}

module.exports = {
  getDemoList,
  createDemo
}