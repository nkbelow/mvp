//create server 
const express = require('express');
const bodyParser = require('body-parser');
const getWeather = require('./WeatherDataRequest');
const mongo = require('../mongo/mongoFile.js');

const app = express();

app.use(express.static(__dirname + '/../client/public'));

// var actions = {
//   'GET': function(req, res) {


//   },
//   'POST': function(req, res) {

//   } 

// };
app.get('/', function(req, res) {
  console.log('whats up');
  res.send('yo');
});

app.get('/comment', function(req, res) {
  console.log('hey');
  res.send('hello');
});

app.get('/weather', function(req, res) {
  // getWeather(function(req, weather) {
  //   console.log('this is req', req);
  //   console.log('this is data', weather);
  // });
  console.log('that was the weather');
  res.send('this went through');
});

app.post('/comment', function(req, res) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    console.log(data);
  });
  console.log('this is a posted comment');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
