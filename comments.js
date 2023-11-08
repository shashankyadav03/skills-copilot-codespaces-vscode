// Create web server
// Run: node comments.js
// Test: curl -d "user=John&comment=hello" http://localhost:8080/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
app.use(bodyParser.json());

app.post('/', function(req, res) {
    var user = req.body.user;
    var comment = req.body.comment;
    console.log(user + ' said: ' + comment);
    res.end('Thank you!');
});

app.listen(8080);
console.log('Server is listening on port 8080');