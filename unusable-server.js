var http = require("http");

var server = http.createServer(timedFunc);

function timedFunc (request, response) {
     var start = new Date().getTime();
     while (new Date().getTime() - start < 10000);
     response.end('Hello!');
}

server.listen(process.env.PORT);