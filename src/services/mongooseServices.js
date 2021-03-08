
const model = require('../connection/mongoose');
const { Demo } = model

const DemoList = async () => {
  // // 查询每个 last name 是 'Ghost' 的 person， select `name` 和 `occupation` 字段
  // Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
  //   if (err) return handleError(err);
  //   // Prints "Space Ghost is a talk show host".
  //   console.log('%s %s is a %s.', person.name.first, person.name.last,
  //     person.occupation);
  // });
  const story = await Demo.find().exec()
  return story
}

const createDemo = async () => {
  const story = await new Demo({ id: 100 }).save()
  // await Demo.create({ id: 200 })

  return story
}

// Demo.create({
//   "name": "23",
//   "sex": "女",
//   "age": 22,
//   "create_time": "2019-01-11 15:09:59"
// })
// Demo.aggregate([
//   {
//     $project: {
//       "year": { "$substr": ["$create_time", 0, 4] },
//       "month": { "$substr": ["$create_time", 5, 2] },
//       "day": { "$substr": ["$create_time", 8, 2] }
//     }
//   },
//   {
//     $group: {
//       _id: { year: "$year", month: "$month", day: "$day" },
//       total: { $sum: 1 }
//     }
//   }
// ]).then((result) => {
//   console.log(result)
// }).catch((err) => {

// });
module.exports = {
  DemoList,
  createDemo
}