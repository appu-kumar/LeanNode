import { createServer } from 'node:http';

const hostname = 'localhost';    //localhost:127.0.0.1   #hostname for local server , It is upto you whether you writing the hostname or ip address
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
