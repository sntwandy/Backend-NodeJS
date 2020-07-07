const fs = require('fs');

fs.copyFile(process.argv[2], 'lemond.txt' , (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Copy successful');
  }
});