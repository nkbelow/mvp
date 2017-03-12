import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import Weather from './components/weather.jsx';
import CommentMenu from './components/commentMenu.jsx';
import CommentList from './components/commentList.jsx';
import $ from 'jquery';
import apiKey from './weatherAPIKey';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: '',
      weatherData: [],
      comments: []
    }
  }

  addWeatherResults(query) {
    var url = 'http://api.wunderground.com/api/' + apiKey + '/forecast10day/q/CA/' + query + '.json';

    $.ajax({
      url: url,
      type: 'GET',
      Contenttype: 'application/json',
      success: (data) => {
        this.setState({
          cityName: query,
          weatherData: data.forecast.txt_forecast.forecastday
        });
        console.log(data);
      }
    });
  }

  addCommentText(comment) {
    var url = 'http://127.0.0.1:3000/comment';
    $.ajax({
      url: url,
      type: 'POST',
      data: comment,
      success: (data) => {
        console.log(data);
      },
      error: (error, data) => {
        console.log(data);
        console.log('this is an error', error);
      }
    })
  }
  getComments() {
    var url = 'http://127.0.0.1:3000/comment';
    $.ajax({
      url: url,
      type: 'GET',
      success: (data) => {
        this.setState({
          comments: data
        })
        console.log(data);
      },
      error: (error, data) => {
        console.log(data);
        console.log('this is an error', error);
      }
    })
  }

  render () {
    return (
    <div> 
    <h1>Check Your Weather </h1>
    <SearchBar addWeather={this.addWeatherResults.bind(this)}/>
    <Weather weatherResults={this.state.weatherData}/>
    <CommentMenu addComment={this.addCommentText.bind(this)}/>
    <CommentList comments={this.state.comments} getComments={this.getComments.bind(this)}/>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));