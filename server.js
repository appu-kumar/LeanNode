
// step 1   import http
// step 2   get createServer method
// step 3   start listening server at given hostname and portNumber 

import { createServer } from 'node:http';           // Modulejs(mjs)  // recommended
// const {createServer} = require('node:http');    // Commonjs(cjs)

const hostname = 'localhost';    //localhost:127.0.0.1   #hostname for local server , It is upto you whether you writing the hostname or ip address
const port = 5000;

const server = createServer((req, res) => {  
  console.log("This will executed when client will request",req.url);
  
  if(req.url === '/hi'){
    console.log("cooming")
    res.end("hi")
  }

  console.log("hi")
  if(req.url === '/goodbye'){
    console.log("good bye");
    res.end("good bye");
  }

  // Let's create different kinds of the end points
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log("this will run when server started")  
  console.log(`Server running at http://${hostname}:${port}/`);
});
