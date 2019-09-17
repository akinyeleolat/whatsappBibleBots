const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const getData = require('simple-get-json');

env.config();

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.get("/search/:query",  (req,res) => {
  const query = req.params.query
  const getScripture = async (query) =>{
  try {
    const url=`https://bible-api.com/${query}`
    const [response] = await getData([url]);
  
    res.send(response);
  } catch (error) {
    console.error(error);
  }
}
getScripture(query)
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});