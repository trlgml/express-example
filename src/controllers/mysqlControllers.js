const { getDemoList, createDemo } = require('../services/mysqlServices')

const list = async (req, res, next) => {
  const story = await getDemoList()
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