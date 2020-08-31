'use strict';

module.exports = {
  apps: [
    {
      name: 'API',
      instances: 'max',
      script: 'bin/www.js',
      exec_mode: 'cluster',
      merge_logs: true,
    },
  ],
};
