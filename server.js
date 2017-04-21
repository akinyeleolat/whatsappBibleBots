// server.js
// where your node app starts

// init project
var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

// http://expressjs.com/en/starter/basic-routing.html
app.post("/status_callback", function (request, response) {
  console.log('Request received: status ' + request.payload)
  console.log(request.body);
  response.sendStatus(200);
});

app.post("/inbound_callback", function (request, response) {
  console.log('Request received: inbound');
  console.log(request.body);
  response.sendStatus(200);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
