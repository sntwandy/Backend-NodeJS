const { Readable } = require('stream');

const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(5).concat('Batman, Batman!'));
readableStream.push(null);

readableStream.pipe(process.stdout);