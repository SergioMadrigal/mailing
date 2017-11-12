var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use('/images', express.static(__dirname + '/images'))

app.listen(3000);

console.log("Run at port 3000");