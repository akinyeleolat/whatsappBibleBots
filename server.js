var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.post("/status_callback", function (request, response) {
  console.log('Status received: ' + request.body.payload.message_id + ' is now ' + request.body.payload.message_status);
  response.sendStatus(200);
});

app.post("/inbound_callback", function (request, response) {
  console.log('Message received: ' + request.body.payload.message.conversation);
  response.sendStatus(200);
});

app.post("/media_callback", function (request, response) {
  console.log('Media callback: ' + JSON.stringify(request.body.payload.media));
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});