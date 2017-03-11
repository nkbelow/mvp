//get data from open weather api
const http = require('http');
const request = require('request');


//create options for api call
const checkYourWeather = (cityName, callback) => {
  //set options for get request
  const options = {
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey,
    method: 'GET',
    headers: {'Content-type': 'application/json'},
  };
  request(options, (error, response, body) => {
    if (error) {
      console.log('this is an error', error);
    } else {
      console.log(response.statusCode, body, 'it worked', apiKey);
    }
  });
};

module.exports = checkYourWeather;