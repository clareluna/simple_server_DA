'use strict';

var http = require('http');
var fs = require('fs');

// find way to add if (err) throw err;
function send404repsonse(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write('Error 404: page not found');
	response.end();
}

function onRequest(request, response) {
	if(request.method === 'GET' && request.url === '/') {
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./app/index.html").pipe(response);
		// if I had more time I would find a way to run the switch for css file
	} else {
		send404repsonse(response);
	}
}	

http.createServer(onRequest).listen(7777);

console.log('server running on 7777')
