var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{
        'content-type':'text/plain'
    });
    res.write('hello node.js');
    res.end();

}).listen(3000);