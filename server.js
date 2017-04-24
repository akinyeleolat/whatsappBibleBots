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
app.use(bodyParser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.post("/status_callback", function (request, response) {
  console.log('Request received: status ');
  response.sendStatus(200);
});

app.post("/inbound_callback", function (request, response) {
  console.log('Message received: ' + request.body.payload.message.conversation);
  response.sendStatus(200);
});

app.get("/test", function(req, res) {
  console.log("Hello!");
  res.sendStatus(200);
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
