// $s string
// %d number
// %j json

console.log("A %s and a %d", 'dog', 20);

// Alias
console.info('Hello Megan E.');

// Alias
console.warn('Im a warn');

// Return a bool to evalute
console.assert(42 === '42');

// Specific the error line
// console.trace('Here');

const util = require('util');

const debugLog = util.debuglog('foo');

debugLog('Hello from foo');