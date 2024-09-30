const winston = require('winston');

const logger =()=>{;
    return winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});
}
module.exports = logger;

