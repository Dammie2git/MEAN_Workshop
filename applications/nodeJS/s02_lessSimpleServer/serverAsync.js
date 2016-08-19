var http = require('http');
var fs = require('fs');
fs.readFile("./index.html",function(err,htmlData){
  if(err)
    throw err;  //or handle by sending 404
  http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlData);
  }).listen(8000,function(){
    console.log("Server setup and listening on port 8000");
  });
});
