var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
  var urlParsed = url.parse(req.url);
  var fileName = urlParsed.pathname;
  var fileData = fs.readFileSync("."+fileName);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fileData)
}).listen(8000,function(){
  console.log("Static web application listening on port 8000");
});
