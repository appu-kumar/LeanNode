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


