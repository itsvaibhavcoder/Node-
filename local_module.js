const http = require('http');
const dbinfo = require('./dbinfo'); // Adjust the path if needed

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.end('The database username is ' + dbinfo.username);
    }
}).listen(5000);

