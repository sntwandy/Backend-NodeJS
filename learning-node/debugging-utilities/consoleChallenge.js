const { Console } = require('console');

const myConsole = new console.Console( {
  stdout: process.stdout,
  stderr: process.stderr,
} );

const colors = {
  log: '\x1b[37m ✅',
  info: '\x1b[34m',
  error: '\x1b[31m ❌',
  warn: '\x1b[33m ⚠️',
}

Console.prototype.lo = function (text) {
  this.log(`${colors.log} ${text}`);
};

Console.prototype.in = function (text) {
  this.log(`${colors.info}ℹ️ ${text}`);
};

Console.prototype.wa = function (text) {
  this.log(`${colors.warn} ${text}`);
};

Console.prototype.err = function (text) {
  this.log(`${colors.error} ${text}`);
};

myConsole.lo('This is ');
myConsole.in('This is ');
myConsole.wa('This is ');
myConsole.err('This is ');