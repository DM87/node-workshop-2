var http = require("http");

var server = http.createServer(timedFunc);

function timedFunc (request, response) {
    setTimeout(function(){response.end('Hello!')},10000);
}

server.listen(process.env.PORT);