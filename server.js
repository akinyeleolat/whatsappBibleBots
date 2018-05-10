var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.post("/webhook", function (request, response) {
  console.log(request.body);
  console.log(req
  response.sendStatus(200);
});
app.post("/status_callback", function (request, response) {
  console.log('Status received: ' + request.body.payload.message_id + ' is now ' + request.body.payload.message_status);
  response.sendStatus(200);
});

app.post("/inbound_callback", function (request, response) {
  console.log('Message received: ' + JSON.stringify(request.body.payload));
  response.sendStatus(200);
});

app.post("/media_callback", function (request, response) {
  console.log('Media callback: ' + JSON.stringify(request.body.payload));
  response.sendStatus(200);
});

app.post("/docker_email", function (request, response) {
  console.log('Docker email POST: ' + JSON.stringify(request.body));

  response.sendStatus(200);
});

app.get("/docker_email", function (request, response) {
  console.log('Docker email GET: ' + JSON.stringify('OK'));
  response.send('OK!');
});

app.get("/image", function (request, response) {
  response.sendFile('/usr/local/wamedia/incoming/photos/WhatsApp/2017-04/IMG-20170428-WA003.jpg');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});