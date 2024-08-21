const color = {
    red: '\x1b[31m',
    orange: '\x1b[38;5;202m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    blue: '\x1b[36m',
    reset: '\x1b[0m'
}

function getTimestamp() {
    let date = new Date();

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function warn(message) {
    console.log(`${color.orange}[${getTimestamp()}] [ WARN ]${color.reset} ${message}`);
}

function error(message) {
    console.log(`${color.red}[${getTimestamp()}] [ ERROR ]${color.reset} ${message}`);
}

function success(message) {
    console.log(`${color.green}[${getTimestamp()}] [ SUCCESS ]${color.reset} ${message}`);
}

function bonus(message) {
    console.log(`${color.yellow}[${getTimestamp()}] [ BONUS ]${color.reset} ${message}`);
}

function debug(message) {
    console.log(`${color.blue}[${getTimestamp()}] [ DEBUG ]${color.reset} ${message}`);
}

module.exports = { warn, error, success, debug, bonus };