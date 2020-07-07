const http = require('http');
const server = http.createServer();

// Create event whehn server recive a request
server.on('request', (req, res) => {
  // Controlate POST and URL
  if (req.method === 'POST' && req.url == '/birthday') {
    let body = []; // Create Array to save the data from server
    req.on('data', chunk => { // Open an event to recive the data
      body.push(chunk); // Add the data to body array
    }).on('end', () => { // Open an event when finshed to send data
      res.writeHead(200, { 'Content-Type': 'text/plain', }); // Sent the head, status..
      // We trasnform the body content toString() and separate the  data with /
      body = Buffer.concat(body).toString().split('/');
        // We save the data from the array
        const day = body[0]; // day
        const month = body[1] - 1; // month
        const year = body[2]; // year
        // Create a new date with data from array, and output a complete date with the day
        const birthday = new Date(year, month, day);
        // We sent the new date to server and separate the date with ' ' and choose the position 0
        res.end(birthday.toString().split(' ')[0]);
    });
  } else { // IF not is '/birthday'
    res.statusCode = 404; // Status code 404
    res.end('Error: 404'); // Sent a message to the server
  }
});
// Open the server in port 3000
server.listen(3000);
// A console message, the server initializing
console.log('The server is on port 3000: http://localhost:3000');