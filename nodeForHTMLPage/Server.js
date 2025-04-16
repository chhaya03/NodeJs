const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 5500;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url)

  if(req.url == '/'){
    res.statusCode = 200;
    res.end('<h1>This is http server 5500</h1><p>Hey this is Chhaya Mishra on port 5500</p>');
  }

  else if(req.url == '/about'){
    res.statusCode = 200;
    res.end('<h1>This is http server</h1><p>Hey this is Chhaya Mishra</p>');
  }

  else if(req.url == '/hello'){
    res.statusCode = 200;
    const data = fs.readFileSync('index.html')    // accessing for index html file on server 4000
    res.end(data.toString());
  }

  else{
    res.statusCode = 404;
    res.end('NOT FOUND');
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});