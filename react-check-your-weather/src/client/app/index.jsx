import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import Weather from './components/weather.jsx';
import CommentMenu from './components/commentMenu.jsx';
import CommentList from './components/commentList.jsx';
import $ from 'jquery';
import apiKey from './weatherAPIKey';
import TodoList from './components/todoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: '',
      weatherData: [],
      comments: [],
      showHead: false,
      todos: []
    }
  }

  addTodo(todo) {
    this.state.todos.push(text);
    this.setState({
      todos: this.state.todos
    })
  }

  removeTodo() {

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
          weatherData: data.forecast.txt_forecast.forecastday,
          showHead: true
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
          comments: JSON.parse(data)
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
    <h1>Small Talk</h1>
    <CommentMenu addComment={this.addCommentText.bind(this)} getComments={this.getComments.bind(this)} />
    <CommentList comments={this.state.comments} />
    <SearchBar addWeather={this.addWeatherResults.bind(this)}/>
    <Weather cityName={this.state.cityName} weatherResults={this.state.weatherData} headers={this.state.showHead} />
    <TodoList />
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));