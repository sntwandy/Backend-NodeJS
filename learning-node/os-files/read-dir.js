const fs = require('fs');

const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err); // Output: Error
  } else {
    console.log(files); // Output: Array of files
  }
});