
const model = require('../connection/mongoose');
const { demo } = model

const DemoList = async () => {
  const story = await demo.find().exec()
  return story
}

const createDemo = async () => {
  const story = await demo({ id: 100 }).save()
  return story
}

module.exports = {
  DemoList,
  createDemo
}