var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello world");
}).listen(8000,function(){
  console.log("Server setup and listening on port 8000");
});
