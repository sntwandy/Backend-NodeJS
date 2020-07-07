const { Transform } = require('stream');

const camelCaseTransform = new Transform({

  transform(chunk, uncoding, callback) {

    const string = chunk.toString();

    string.split(' ').map( str => {
      this.push(str.charAt(0).toUpperCase() + str.slice(1));
    });

    callback();

  },
});

process.stdin
  .pipe(camelCaseTransform)
  .pipe(process.stdout);