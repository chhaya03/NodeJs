const os = require('os')

console.log(os.freemem())  //Returns the amount of free system memory in bytes as an integer.(1084166144)

console.log(os.homedir()) //Returns the string path of the current user's home directory.

console.log(os.hostname()) //Returns the host name of the operating system as a string.

console.log(os.platform()) // Returns a string identifying the operating system platform for which the Node.js binary was compiled

console.log(os.release())  //Returns the operating system as a string.

console.log(os.totalmem())  //Returns the total amount of system memory in bytes as an integer.

console.log(os.type())   //Returns the operating system name as returned by uname(3). 