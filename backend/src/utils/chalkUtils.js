
const chalk = require('chalk');

// Define different chalk styles
const chalkStyles = {
    error: chalk.bold.red,
    warning: chalk.keyword('orange'),
    info: chalk.blue,
    success: chalk.green,
    debug: chalk.gray,
};

module.exports = {
    chalkStyles
}