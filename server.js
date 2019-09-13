var express = require('express')
  , bodyParser = require('body-parser');

// var getJson = require('get-json');
var axios = require('axios');

var app = express();

var instance = axios.create({
  baseURL: 'https://bible-api.com/',
  timeout: 1000,
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.get("/search/:query", function (request, response) {
  console.log(request.params.query)
//   async function getScripture() {
//   try {
//     const response = await instance.get('/user?ID=12345');
//     response.send(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});