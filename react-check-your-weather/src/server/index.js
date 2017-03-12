//create server 
const express = require('express');
const bodyParser = require('body-parser');
const getWeather = require('./WeatherDataRequest');
const mongo = require('./../mongo/mongoFile.js');

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
  mongo.selectAll(function(err, comments) {
    console.log(comments);
    let desired = JSON.stringify(comments);
    res.send(desired);
  });
  
});

app.get('/weather', function(req, res) {
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
    var Comment = new mongo.comment({text: data});
    Comment.save(function(err, Comment) {
      if (err) {
        throw err;
      } else {
        console.log(Comment.text);
      }
    });
    res.send(data);
  });
  
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
