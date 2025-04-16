const fs = require('fs')

const a = fs.readFileSync('file.text')
  console.log(a.toString())

  fs.writeFile('file2.txt , "This is a data' , () =>{
    console.log("Written to the file")
  })

console.log("Finished reading file")