'use strict';

const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env'));
for (const [k, v] of Object.entries(envConfig)) {
  process.env[k] = v;
}

const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },

  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },

  mysql: {
    host: {
      default: '127.0.0.1',
      format: String,
      env: 'MYSQL_URI',
    },
    user: {
      default: 'root',
      format: String,
      env: 'MYSQL_USERNAME',
    },
    password: {
      default: 'root',
      format: String,
      env: 'MYSQL_PASSWORD',
    },
    database: {
      default: 'DATABASE',
      format: String,
      env: 'MYSQL_DATABASE',
    },
    port: {
      default: 3306,
      format: Number,
      env: 'MYSQL_PORT',
    },
  },

  mongodb: {
    db: {
      default: 'mongodb://127.0.0.1:27017/test',
      format: String,
      env: 'MONGODB_URI',
    }
  },

  redis: {
    port: {
      default: 6379,
      format: Number,
      env: 'REDIS_PORT',
    },
    host: {
      default: '127.0.0.1',
      format: String,
      env: 'REDIS_HOST',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
