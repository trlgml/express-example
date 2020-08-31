module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Demo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true },
    /*     flag: {type: DataTypes.BOOLEAN, defaultValue: true},//布尔值
     integer: {type: DataTypes.INTEGER, defaultValue: 0},//整数
     date: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},//时间
     title: {type: DataTypes.STRING, defaultValue: ''},//字符串
     allow: {type: DataTypes.STRING, allowNull: false,},//null类
     identifier: {type: DataTypes.STRING, primaryKey: true},//主键类
     incrementMe: {type: DataTypes.INTEGER, autoIncrement: true},//自增类
     someUnique: {type: DataTypes.STRING, unique: true},//唯一类
     hasComment: {type: DataTypes.INTEGER, comment: "I'm a comment!"},//描述类
     validate: {type: DataTypes.INTEGER, validate: {is: ["^[a-z]+$",'i']}},//验证类*/
  }, {
    classMethods: {
      associate: function (models) {
      }
    },
    freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步
    tableName: 'demo',
    timestamps: 'true',
    updatedAt: "updateat",
    createdAt: "createdat"
  });
};


/* 验证
is: ["^[a-z]+$",'i'],     // 只允许字母
is: /^[a-z]+$/i,          // 只允许字母
not: ["[a-z]",'i'],       // 不能使用字母
isEmail: true,            // 检测邮箱格式 (foo@bar.com)
isUrl: true,              // 检查Url格式 (http://foo.com)
isIP: true,               // 检查 IPv4 或 IPv6 格式
isIPv4: true,             // 检查 IPv4
isIPv6: true,             // 检查 IPv6
isAlpha: true,            // 不能使用字母
isAlphanumeric: true,     // 只允许字母数字字符
isNumeric: true,          // 只能使用数字
isInt: true,              // 只能是整数
isFloat: true,            // 只能是浮点数
isDecimal: true,          // 检查数字
isLowercase: true,        // 检查小写字母
isUppercase: true,        // 检查大写字母
notNull: true,            // 不允许null
isNull: true,             // 只能为null
notEmpty: true,           // 不能空字符串
equals: 'specific value', // 只能使用指定值
contains: 'foo',          // 必须包含子字符串
notIn: [['foo', 'bar']],  // 不能是数组中的任意一个值
isIn: [['foo', 'bar']],   // 只能是数组中的任意一个值
notContains: 'bar',       // 不能包含子字符串
len: [2, 10],              // 值的长度必在 2 和 10 之间
isUUID: 4,                // 只能是UUID
isDate: true,             // 只能是日期字符串
isAfter: "2011-11-05",    // 只能使用指定日期之后的时间
isBefore: "2011-11-05",   // 只能使用指定日期之前的时间
max: 23,                  // 允许的最大值
min: 23,                  // 允许的最小值
isArray: true,            // 不能使用数组
isCreditCard: true,       // 检查是有效的信用卡

// 也可以自定义验证:
isEven: function(value) {
if(parseInt(value) % 2 != 0) {
throw new Error('Only even values are allowed!')
// we also are in the model's context here, so this.otherField
// would get the value of otherField if it existed
}
}
*/

/*数据类型
DataTypes.STRING                      // VARCHAR(255)
DataTypes.STRING(1234)                // VARCHAR(1234)
DataTypes.STRING.BINARY               // VARCHAR BINARY
DataTypes.TEXT                        // TEXT
DataTypes.TEXT('tiny')                // TINYTEXT

DataTypes.INTEGER                     // INTEGER
DataTypes.BIGINT                      // BIGINT
DataTypes.BIGINT(11)                  // BIGINT(11)

DataTypes.FLOAT                       // FLOAT
DataTypes.FLOAT(11)                   // FLOAT(11)
DataTypes.FLOAT(11, 12)               // FLOAT(11,12)


DataTypes.DOUBLE                      // DOUBLE
DataTypes.DOUBLE(11)                  // DOUBLE(11)
DataTypes.DOUBLE(11, 12)              // DOUBLE(11,12)

DataTypes.DECIMAL                     // DECIMAL
DataTypes.DECIMAL(10, 2)              // DECIMAL(10,2)

DataTypes.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY                    // DATE without time.
DataTypes.BOOLEAN                     // TINYINT(1)

DataTypes.ENUM('value 1', 'value 2')  // An ENUM with allowed values 'value 1' and 'value 2'

DataTypes.UUID                        //   PostgreSQL 和 SQLite 中为 UUID, MySQL 中为CHAR(36) BINARY (使用 defaultValue: DataTypes.UUIDV1 或 DataTypes.UUIDV4 生成默认值)
*/
