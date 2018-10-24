const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function(url) {

  mongoose.connect(url, {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  });

  mongoose.connection.on("error", function(error) {
    winston.log("error", `mongodb error: ${error}`);
    process.exit(1);
  });
  mongoose.connection.on("disconnected", function() {
    winston.log("info", `disconnected from mongodb server ${url}: will try to reconnect`);
  });
  mongoose.connection.on("connected", function() {
    winston.log("info", `connected to mongodb server ${url}`);
  });
  mongoose.connection.on("reconnected", function() {
    winston.log("info", `reconnected to mongodb server ${url}`);
  });
}