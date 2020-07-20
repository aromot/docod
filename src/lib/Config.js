let config;

export default {
  init(iConf) {
    config = iConf;
    document.title = this.interpolateString(config.title)
  },
  get(key) {
    return key ? (config[key] || '') : config
  },
  interpolateString(str) {
    return str.replace('[appName]', config.appName || '');
  }
}