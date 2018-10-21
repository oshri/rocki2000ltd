const convict = require('convict');
const winston = require('winston');
const debug = require('debug')('rocki2000ltd:config');

function Config() {
  const configSchema = convict({
    env: {
      doc: "The application environment",
      format: ["production", "development"],
      default: "development",
      env: "NODE_ENV"
    },
    logLevel: {
      doc: "Log Level",
      format: Object.keys(winston.levels),
      default: "info",
      env: "LOG_LEVEL"
    },
    mongodb: {
      url: {
        doc: "URL of MongoDB",
        format: String,
        default: null,
        env: "MONGODB_URL"
      },
      username: {
        doc: "Username of MongoDB",
        format: String,
        default: null,
        env: "MONGODB_USERNAME"
      },
      password: {
        doc: "Username of MongoDB",
        format: String,
        sensitive: true,
        default: null,
        env: "MONGODB_PASSWORD"
      }
    },
    port: {
      doc: "Port to listen on",
      format: Number,
      default: 4200,
      env: "PORT"
    }
  });

  const env = configSchema.get('env');
  const file = `./server/config/${env}.json`;
  configSchema.loadFile(file);
  configSchema.validate({allowed: 'strict'});
  configSchema.set('app.name', 'rocki2000ltd');
  configSchema.set('app.version', require('../package.json').version);
  debug(`loaded configuration from ${file}: ${configSchema.toString().replace(/[\n ]/g, '')}`);

  return configSchema;
}

module.exports = Config();
