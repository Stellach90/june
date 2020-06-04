var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == './'){filename = './test'}

    filename = filename + '.html';
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'content-Type' : 'text/html'});
            return res.end("404 Not found");
        }
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
    
}).listen(8080);
