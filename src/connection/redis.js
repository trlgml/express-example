'use strict';

const Redis = require('ioredis');
const config = require('../config');

const { redis } = config.get();

const clientFactory = ({ host, port }) => {

  const client = new Redis({
    host,
    port,
  });

  client.on('error', (err) => {
    console.error('[redis] client error: %s', err);
  });

  return client;
};

const client = clientFactory({ ...redis });

module.exports = {
  client,
};
