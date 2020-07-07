const fs = require('fs');
// Create directories
fs.mkdir('platzi/EJS', {recursive: true}, (err) => {
  if (err) {
    console.error(err);
  }
});