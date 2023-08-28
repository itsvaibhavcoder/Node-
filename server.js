const http = require('http')
http.createServer(function(req, res){
    res.end('Hello World in Node Js using virtula server')
}).listen(5000)