const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const { chalkStyles } = require('./chalkUtils');

// Define custom log format
const customFormat = printf(({ level, message, timestamp }) => {
    let styledMessage;

    switch (level) {
        case 'error':
            styledMessage = chalkStyles.error(message);
            break;
        case 'warn':
            styledMessage = chalkStyles.warning(message);
            break;
        case 'info':
            styledMessage = chalkStyles.info(message);
            break;
        case 'success':
            styledMessage = chalkStyles.success(message);
            break;
        case 'debug':
            styledMessage = chalkStyles.debug(message);
            break;
        default:
            styledMessage = message;
    }

    return `${timestamp} [${level}]: ${styledMessage}`;
});

const logger = createLogger({
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
    format: combine(
        timestamp(),
        customFormat
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        }),
        new transports.File({ filename: './logs/error.log', level: 'error' }),
        new transports.File({ filename: './logs/combined.log' })
    ]
});

module.exports = logger;