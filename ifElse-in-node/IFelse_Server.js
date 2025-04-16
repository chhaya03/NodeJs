const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url)

  if(req.url == '/'){
    res.statusCode = 200;
    res.end('<h1>This is http server 4000</h1><p>Hey this is Chhaya Mishra on port 4000</p>');
  }

  else if(req.url == '/about'){
    res.statusCode = 200;
    res.end('<h1>This is http server</h1><p>Hey this is Chhaya Mishra</p>');
  }

  else{
    res.statusCode = 404;
    res.end('not found');
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});