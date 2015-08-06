'use strict';
//set node methods to require
var http = require('http');
var fs = require('fs');


var mainPage = null;
fs.readFile('./app/index.html', function(err, data){
	//if error in loading index page
	if (err) throw err;
	mainPage = data; //sets index file to be called later
});

var errorPage = null;
fs.readFile('./app/error.html', function(err, data){
	//if error in loading error page
	if (err) throw err;
	errorPage = data; //save file as errorPage
});

var httpInterpretor = function(request, response){

	if (request.url === '/') {
		response.writeHead(200, {'Content-Type': "text/html"});
		response.write(mainPage); // currently spitting out html
		response.end();
	} else{
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write(errorPage); // called from above writing of error path
		response.end();
	}
}

var server = http.createServer(httpInterpretor);
server.listen(9999);
console.log('super server at 9999')