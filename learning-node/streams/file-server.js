const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res)  => {
  fs.readFile(__dirname + '/big.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.end(data);
    };
  });
});

server.listen(3000);