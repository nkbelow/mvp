import React from 'react';
import WeatherResultEntry from './weatherResultEntry.jsx';

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
      <thead>
      <tr>
      <th>10 Day Forecast</th>
      <th>Time Of Day</th>
      </tr>
      </thead>
      <tbody>
      {this.props.weatherResults.map((result) => (
        <WeatherResultEntry forecast={result.fcttext} timeOfDay={result.title} />
        
      ))}
      </tbody>
      </table>
    )
  }
}

export default Weather;