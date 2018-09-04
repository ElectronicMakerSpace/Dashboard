const express = require('express');

const app = express ()

app.get('/temperature', function (req, res) {
	res.send('24 °C');
});
app.get('/humidity', function(req, res) {
	res.send('48%');
});

app.listen(8080, function(){
	console.log('Server listening on port 8080');
});