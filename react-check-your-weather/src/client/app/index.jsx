import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import Weather from './components/weather.jsx';
import CommentMenu from './components/commentMenu.jsx';
import CommentList from './components/commentList.jsx';
import $ from 'jquery';
import apiKey from './weatherAPIKey'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  addWeatherResults(query) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey;

    $.getJSON(url).then((data) => {
      console.log(data)
    });
  }

  //   $.ajax({
  //     url: 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey,
  //     contentType: 'application/json',
  //     datatype: json,
  //     type: 'GET',
  //     Cross,
  //     success: (res) => {
  //       console.log(res);
  //     },
  //     error: () => {
  //       console.log('this is an error');
  //     }
  //   }); 
  // }

  addCommentText(comment) {
    console.log(comment)
  }

  render () {
    return (
    <div> 
    <h1>Check Your Weather </h1>
    <SearchBar addWeather={this.addWeatherResults.bind(this)}/>
    <Weather />
    <CommentMenu addComment={this.addCommentText.bind(this)}/>
    <CommentList />
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));