const { DemoList, createDemo } = require('../services/mongooseServices')

const list = async (req, res, next) => {
  const story = await DemoList()
  res.status(200).json({
    data: story
  })
}

const create = async (req, res, next) => {
  await createDemo()
  res.status(200).send('ok')
}

module.exports = {
  list,
  create
}