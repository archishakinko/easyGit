var http = require("http");
var server = http.createServer(function(req, res) {
	res.end('easy-breeezzzy282');
}).listen(process.env.PORT || 5000);