# What is the Node.js
- It is a run time environment for the js, It is v8+API(file system, i/0, connect to db, createServer... etc )
- intialize your root folder with npm eg. npm init -y 
- package.json is configuration file of your node.js project ok
- Inside the package.json file add "type":"module" so that node.js env can understand that index.js file according to es6(import and export etc..)



# How https server works?
- The browser first resolves the domain name (e.g., example.com) to an IP address by querying a DNS (Domain Name System) server.
- If successful, it retrieves the server's IP address (e.g., 192.168.1.1).
- The browser tries to establish a connection to the server using the retrieved IP address and a specific port number (default ports are 80 for HTTP and 443 for HTTPS).
- The browser sends a request using the HTTP(S) protocol to check if the server is responding.
- A TCP handshake is performed (involving SYN, SYN-ACK, and ACK messages) to ensure the server is ready to communicate.

# Server responds
- A status code (e.g., 200 OK, 404 Not Found, etc.).
- The requested resource or an error message if something goes wrong.
- ERR_CONNECTION_REFUSED: Server is not running or blocking the connection
- ERR_TIMED_OUT: Server is unreachable due to network issues.

# How the Browser Determines the Difference
- Step 1: Parse the URL
- 1. For eg. 1  http://localhost:3000
- 2. The hostname is localhost, which maps to 127.0.0.1.
- 3. This indicates a local server.

- 1. For https://example.com
- 2. The hostname example.com resolves to a public IP via DNS.
- 3. This indicates a remote server.


# Difference b/w  Commonjs(cjs) and Modulejs(mjs)  
- Commonjs(eg. const file = require('fs')) is used only in node.js ok
- Module.export = {f1,f2,f3 ...}
- No need to write "type":"module" in package.json
- Modulejs(eg. import file from 'fs') latest one according to ES6  recommended
- export {f1,f2,f3...}
- In package.json, need to specify the "type":"module"


# What is HTTP?
- HTTP (HyperText Transfer Protocol) is the foundation of communication on the web. It defines how data is exchanged between a browser (client) and a web server.

# Key Points:
- Protocol: A set of rules that allows devices to communicate.
- Stateless: Each request is independent and does not remember previous requests.
- Based on TCP/IP: HTTP works on top of the TCP/IP protocol for reliable data transmission. 3 ways handsake(To establisize connection)
- It is universal and platform independent
- Used in servers communication as well , eg RESTFULL API based communication 
- Usage: Accessing web pages, APIs, and downloading resources like images, videos, or documents.
- Browser's primary protocol 


# HMR  Hot module reload
- npm install --save-dev nodemon


# Express
- It is http server's framework, that creates the server smoothly, increase testability, readablity etc.
- All Route always start with '/' in express ok.(vvImportant)
- send() is a method which is used to send any kind of the data eg. array, json, etc.

# Middleware 
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the - application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
- middleware having some steps
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
- An Express application can use the following types of middleware:
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware


# MongoDB vs Nosql
1. MongoDB(Nosql)
- NoSQL database.
- Stores data in JSON-like documents called BSON (Binary JSON).
- Schema is flexible; fields can vary from document to document.
- If you want to store highly scalable data, then you can go with this
- show dbs
- use test           If there is no any collection with this name, then it will create the test collection
- show collections
- db.test.find()     It will give all documents of the test collection
- db.createCollection("nameOfthecollection")



2. Mysql(SQL) 
- Relational database.
- Stores data in tables with rows and columns.
- Schema is strict; a fixed structure (e.g., column names and data types) must be defined.
- If you want structure data then you can go with Mysql


# server.use(express.json());
- express.json() is a built-in middleware function in Express.js.
- It parses incoming requests with JSON payloads and is based on the body-parser library.
- It converts the raw request body into a JavaScript object and attaches it to the req.body property.
- It is used when your application needs to handle incoming JSON data in HTTP requests, especially with methods like POST, PUT, or PATCH.










