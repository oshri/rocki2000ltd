const logErrorAndNext = require('../utils/logger');

/**
 * Admin login routing middleware
 */

exports.requiresAdmin = function(req, res, next) {
    const headeauthorizationrs = req.headers.authorization;
    
    if (!headeauthorizationrs) {
        return logErrorAndNext(`No credentials sent!`, {}, req.body, next, res, 401);
    }

    next();
};