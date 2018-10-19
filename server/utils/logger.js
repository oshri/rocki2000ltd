const logger = require('winston');
const logZIOWinstonTransport = require('winston-logzio');
const env = process.env.NODE_ENV || 'dev';

                                           
if(env === 'production') {
    const loggerOptions = {
        token: process.env.LOGZIO_TOKEN,
        host: 'listener.logz.io',
        type: 'rocki2000ltd_server'
    };

    logger.add(logZIOWinstonTransport, loggerOptions);
    logger.remove(logger.transports.Console);
    logger.add(logger.transports.Console, {
        prettyPrint: true,
        colorize: true,
        silent: false,
        timestamp: false
    });
}


const logErrorAndNext = (message, error, dynamic, next, res, code) => {
    if(env === 'production') {
        logger.error(message, error, dynamic);
    } else {
        console.log('Error:', message, error, dynamic)
    }

    next(res.status(code).send({
        error, message
    }));
}

module.exports = logErrorAndNext;