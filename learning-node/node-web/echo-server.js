const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => { // Server on
  if(req.method === 'POST' && req.url == '/echo') { // Condition server, POST
    let body = []; // Body to POST
    req.on('data', chunk => { // Event Data is on
      body.push(chunk); // Recive the chunk and we push to Body
    }).on('end', () => { // When finished
      res.writeHead(200, { 'Content-Type': 'text/plain', }); // Sent the code and head
      body = Buffer.concat(body).toString(); // we take the body, and take the Buffer and concat the data toString()
      res.end(body); // And sent the body (data)
    })
  } else { // If no POST or /echo
    res.statusCode = 404; // status code = 404
    res.end('Error: 404'); // Send a text error like that
  }

});

server.listen(8001); // We are listening in the port '''

console.log('Server is on URL: http://localhost:8001'); // Send a message to the terminal with some info