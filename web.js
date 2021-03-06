var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());
var app = express();

app.get('/', function(request, response) {
  fs.readFile('index.html', function (err, data) {
	  if (err) throw err;
	  response.send("" + data);
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
