var http = require('http');
var fs = require('fs');
var htmlData = fs.readFileSync("./index.html");

http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(htmlData);
}).listen(8000,function(){
  console.log("Server setup and listening on port 8000");
});
