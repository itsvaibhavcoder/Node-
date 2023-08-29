const http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.end('This is npm nodemon module');
    }
}).listen(5000);
