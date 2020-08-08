const path = require('path');
const { getConfig } = require('./webpack.common');
const fs = require('fs');

module.exports = env => {

  // env = env || {};
  // console.log('env=', env);
  let rawdata = fs.readFileSync('package.json');
  let data = JSON.parse(rawdata);

  return getConfig({
    appName: 'docod',
    version: data.version,
    env: 'prod',
    prodPath: './dist',
    prodPublicPath: '/'
  });
};