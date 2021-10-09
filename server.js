const express = require('express');
const app = express();
const  bodyParser = require('body-parser');

let routes = require('./api/routers');
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/', routes)


 app.listen(8000, function() {

  console.log('Server Listening on Port' + 8000);
});