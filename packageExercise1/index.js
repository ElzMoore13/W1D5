var chalk = require("chalk");

var message = chalk.bold.blue("Hello ") + chalk.bgYellow("World");
console.log(message);