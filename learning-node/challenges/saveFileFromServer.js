const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == '/') {
    req.on('data', chunk => {
      const data = chunk.toString();
      const file = fs.createWriteStream(__dirname + '/output.txt');
        file.write(data)
        req.on('end', () => {
          res.end('Data sent');
        } );
    }).on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
    });
  } else {
    res.statusCode = 404;
    res.end('Error: 404');
  };
});

server.listen(3000);
console.log('Server is on PORT: localhost:3000');