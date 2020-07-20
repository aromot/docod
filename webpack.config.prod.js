const path = require('path');
const { getConfig } = require('./webpack.common');

module.exports = env => {

  env = env || {};
  console.log('env=', env);

  return getConfig({
    appName: 'docod',
    env: 'prod',
    prodPath: './dist',
    prodPublicPath: '/'
  });
};