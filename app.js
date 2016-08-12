var express = require('express');
var Mock 	= require('mockjs');
var app 	= express();

var router 	= require('./router');

console.log(router)

doRouter(router.router);

function doRouter(r) {
	for (var k in r) {
		var data = Mock.mock(r[k]);
		(function (d) {
			app.get(k, function (req, res) {
				res.send(d);
			});
		})(data);
	}
}

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
