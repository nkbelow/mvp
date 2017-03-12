import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }
  queryWeather (e) {
    const weatherRequest = this.refs.weatherQuery.value;
    if (weatherRequest) {
      this.props.addWeather(weatherRequest)
      this.refs.weatherQuery.value = '';
    }
  }


  render() {
    return (
      <div id='searchBar'>
      <h2> Find Your City Here </h2>
      <div>
        <input type='text' ref='weatherQuery' placeholder='Enter your city here'/>
      </div>
      <div id='submit'>
        <button className="btn btn-default btn-success" type='button' onClick={this.queryWeather.bind(this)}> Submit </button>
      </div>
      </div>  



    )
  }
}

export default SearchBar;