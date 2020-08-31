const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const errorHandel = require('./src/middlewares/errorMiddlewares')
const app = express();
const router = require('./src/routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// process.on('unhandledRejection', (reason, p) => {
//   throw reason;
// });
// process.on('uncaughtException', (error) => {
//   console.log('uncaughtException');
// });

app.use('/', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(errorHandel);



module.exports = app;
