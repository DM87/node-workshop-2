var http = require('http');


var server = http.createServer(handleRequests);

function handleRequests(request, response) {
 response.end('Hello!');
}


server.listen(process.env.PORT);