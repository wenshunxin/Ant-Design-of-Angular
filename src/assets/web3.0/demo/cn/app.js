var http = require('http');
var path = require('path');
var url = require('url');
// var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log("1")
	var pathname = __dirname+url.parse(req.url).pathname;
	if(path.extname(pathname)==""){
		pathname+="/";
		console.log('第一步')
	}
	if(pathname.charAt(pathname.length-1)=="/"){
		pathname+="demo.html";
		console.log('第2步')
	}
	console.log(pathname)

	fs.readFile(pathname,function(err,data){
		res.end(data)
	})

}).listen(3310)
console.log('server prot:3310');
