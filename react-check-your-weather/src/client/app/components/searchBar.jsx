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
        <input type='text' ref='weatherQuery' placeholder='Enter your city here'/>
        <button type='button' onClick={this.queryWeather.bind(this)}> Submit </button>
      </div>  



    )
  }
}

export default SearchBar;