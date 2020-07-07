const { Duplex } = require('stream');
const { read } = require('fs');

const duplexStream = new Duplex({
  write(chunk, encodign, callback){
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null);
      return;
    } else {
      this.push(String.fromCharCode(this.currentCharCode++));
    };
  },
});

duplexStream.currentCharCode = 65;
process.stdin
  .pipe(duplexStream)
  .pipe(process.stdout);