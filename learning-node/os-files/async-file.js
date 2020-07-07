const fs = require('fs');

const file = process.argv[2];
// console.log(process.argv)

if (!file) {
  throw Error('You need a file');
}

const content = fs.readFile(file, (err, content) => {
  if (err) {
    return console.error(err);
  }
  const lines = content.toString().split('\n').length;
  console.log(lines);
})
