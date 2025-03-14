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

# mongoose 
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, enabling easy validation, relationships between data, and the use of middleware.
- Schema
- A schema defines the structure of documents in a MongoDB collection. It specifies the field names, types, and validation rules.
- const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0 },
    email: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false },
});

- model
- A model is a wrapper for a schema that allows interaction with a specific collection in MongoDB.
- const User = mongoose.model('User', userSchema);


# mysql2 (It is like a jdbc)
- MySQL2 is a popular Node.js library used to interact with MySQL databases. It provides an interface to execute SQL queries, connect to MySQL servers, and handle database operations in a Node.js application. MySQL2 is an improved and more modern version of the older mysql library, offering better performance and additional features.
- https://sidorares.github.io/node-mysql2/docs
- Following are the ORM That are built for node.js and express.js
- Sequalize
- Typeorm(same as hibernate)
- Prisma



# Authentication And Autherization
- Authentication then Autherization
- # Authentication means
- 1. Process of allowing user
- 2. Login and singup 
- 3. You don't know the user
- 4. Identity

- # Authorization
- 1. You know the user
- 2. But user doesn't have access to the resource
- 3. Access 



# JWT (jsonwebtoken---> npm install jsonwebtoken)
- JWT (JSON Web Token) is a popular standard for securely transmitting information between two parties as a JSON object. It is widely used for user authentication and information exchange because it is compact, self-contained, and secure.
- A JWT has three parts, separated by dots (.)
- 1. Header
- Contains metadata about the token, such as the type of token (JWT) and the signing algorithm used (e.g., HS256 or RS256).
- {
  "alg": "HS256",
  "typ": "JWT"
}
- 2. Payload
- Contains the claims, which are statements about the user or other data. 
- {
  "sub": "1234567890",
  "name": "John Doe",
  "role": "admin",
  "iat": 1516239022
}

- 3. Signature:
- Ensures the token has not been tampered with. Created by encoding the header and payload, and then signing them using a secret key or private key.
- HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)

- # Example
- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

# encode and decode token
- Encoding and Encryption both are reversible process
- 1. jwt.sign(payload,secretKey)
- 2. jwt.verify(token,secretKey)
- secretKey is constant string

# Hashing 
- It is irreversible process, means If it is hashed then no one might get original text.
- Used to store the password in DB.
- During login we hashed our input password and get hashed password from db and  then match both.
- argon2 lib using to hash the password.

# Connecting Backend with Frontend
- Create Vite proeject











