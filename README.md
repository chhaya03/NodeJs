<h1>what is NodeJS?</h1>
Node.js lets you run JavaScript on the server side, not just in the browser. So, you can build backend services (like APIs, databases, etc.) using JavaScript.

<h2>Key Features of Node.js:</h2>
Asynchronous and Event-Driven: Handles many requests at once without blocking.<br>
Fast Execution: Uses Google Chrome’s V8 engine for speedy performance.<br>
Single Programming Language: You can build both frontend and backend using just JavaScript.<br>
NPM (Node Package Manager): Huge collection of open-source packages (like Express, Mongoose, etc.).<br>
Cross-Platform: Works on Windows, macOS, and Linux.


<h2>Common Uses:</h2>
Building REST APIs<br>
Creating real-time apps (like chat apps)<br>
Web servers<br>
Command-line tools<br>
Microservices architecture


<h1>Modules in NodeJS:</h1>
<h2>1.Built-in Modules:</h2>
Provided by Node.js itself.<br>
Examples: fs (file system), http, path, os, url, etc.

<h2>2.User-defined Modules:</h2>
Modules you create yourself in separate .js files.

<h2>3.Third-party Modules:</h2>
Installed via npm (Node Package Manager).<br>
Example: express, mongoose, axios, etc.

<h1>File handling NodeJS (FS MODULE):</h1>
Reading Files:<br>
Writing Files:<br>
Appending to Files:<br>
Renaming Files:<br>
Deleting Files:<br>
Creating Directories


Asynchronous vs. Synchronous: The methods like fs.readFile() and fs.writeFile() are asynchronous, meaning they don't block the execution of the program. The synchronous versions like fs.readFileSync() block the program until the operation completes.


<h2>Architecture:</h2>
<h3>🔹 Event Loop:</h3>
The Event Loop is a fundamental part of Node.js's architecture, and it handles the execution of asynchronous callbacks. The event loop is single-threaded, meaning that it can handle only one task at a time in its loop. However, it is highly efficient because it uses an asynchronous, non-blocking model for I/O operations.

<h4>Diagram of Event Loop Phases:</h4>
1. Timers -> 2. I/O Callbacks -> 3. Idle, Prepare -> 4. Poll -> 5. Check -> 6. Close Callbacks <br><br>

Phases of the Event Loop:<br>
1. Timers: Executes callbacks scheduled by setTimeout() or setInterval().<br>
2. I/O Callbacks: Executes almost all callbacks, except for timers, setImmediate(), and close events.<br>
3. Idle, Prepare: Internal phase used to prepare for the next event.<br>
4. Poll: Retrieves new I/O events; Node.js will block here when appropriate (if there are no timers to check).<br>
5. Check: Executes callbacks scheduled by setImmediate().<br>
6. Close Callbacks: Executes close events, like socket.on('close', ...).

<h2>🔹 Threads:</h2>
Node.js is single-threaded when it comes to executing JavaScript code, but it uses multi-threading internally for certain tasks like file I/O, networking, and database queries.<br>

<h3>How Node.js Uses Threads:</h3>
1. JavaScript Execution: Node.js runs JavaScript in a single thread. The main thread is where the event loop operates, and it processes asynchronous I/O requests and callbacks sequentially.<br><br>
2. Libuv Thread Pool: Node.js uses libuv (a C library) to handle certain I/O operations (such as filesystem operations, DNS lookups, and more). While the event loop is single-threaded, libuv manages a pool of worker threads to perform non-JavaScript I/O tasks. This is a thread pool that can execute tasks in parallel without blocking the main thread.<br><br>
3. Worker Threads: For computationally expensive or CPU-bound tasks, you can also use Worker Threads in Node.js, which allows you to create multiple threads to offload heavy computations without blocking the event loop.


<h1>HTTP SERVER in NodeJs:</h1>
Creating an HTTP server in Node.js is super straightforward, thanks to the built-in http module. Here's a complete breakdown so you understand both the code and what's going on behind the scenes.<br>
const http = require('http');<br>

Node.js has a built-in module called http that allows you to create web servers and handle HTTP requests/responses.<br>
<h2>Create a server:</h2>
1. req: Contains details about the incoming request (URL, method, headers, etc.).<br>
2. res: Used to send a response back to the client.

<h2>Start the Server:</h2>
server.listen(3000 , ()=>{}) => This starts the server and listens on port.(http://localhost:3000/)

Breakdown :<br>
Routing is handled manually using req.url.<br>
res.writeHead(statusCode, headers) sets HTTP response headers.<br>
res.end() ends the response and sends data back to the client.



