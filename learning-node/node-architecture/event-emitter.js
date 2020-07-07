const EventEmiter = require('events');

class Logger extends EventEmiter {
  excute(cb) {
    console.log('Before');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('After');
  };
};

const logger = new Logger();

logger.on('start', () => console.log('Starting!!'));
logger.on('finish', () => console.log('Finishing!!'));
logger.on('finish', () => console.log('It\'s done!'));

// logger.excute( () => console.log('Hello, Megan E.'));
logger.excute( () => setTimeout( () => console.log('Hellooooo!'), 500));