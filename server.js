var express=require('express');
var PORT=8080;
var HOST='0.0.0.0';

var app=express();
app.get('/', function(req, res) {
	console.log('Received request!');
	res.send('Hello!!');
});
app.listen(PORT, HOST);
console.log('Running on http://'+HOST+':'+PORT);
