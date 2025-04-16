const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}



const myEmitter = new MyEmitter();  //Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
myEmitter.on('waterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() =>{
    console.log('Please turn off the motor! Its a gentle reminder');
  }, 3000)
});


console.log("The script is still running")

myEmitter.emit('waterFull');