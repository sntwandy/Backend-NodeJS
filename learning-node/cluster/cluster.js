const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master: ${process.pid} is running!`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  };

  cluster.on('exit', (worker, code, signal) => {
    console.log(`The cluster ${worker.process.pid} died!`);
  });
} else {
  http.createServer( (req, res) => {
    res.writeHead(200);
    res.end('The server is OK')
  }).listen(8000);
};