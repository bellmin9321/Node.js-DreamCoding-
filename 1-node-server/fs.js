const http = require('http');

const server = http.createServer((req, res) => {
  console.log('incoming...');
  const url = req.url;
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
  } else if (url === '/courses') {
    res.setHeader('Content-Type', 'text/html');
  } else {
    res.write('<h1>Not found</h1>')
  }
  res.end();
})

server.listen(8080);