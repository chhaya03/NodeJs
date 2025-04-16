const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html')  //The path.basename() method returns the last portion of a path, similar to the Unix basename command. 
console.log(a1)

const a2 = path.dirname('C:\\temp\\myfile.html')   //The path.dirname() method returns the directory name of a path
console.log(a2)

const a3 = path.extname(__filename) //The path.extname() method returns the extension of the path
console.log(a3)