import React from 'react';
import WeatherResultEntry from './weatherResultEntry.jsx';

class Weather extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props.weatherResults);
    if (this.props.headers) {
      return (
        <div>
        <h4 id='cityName' className='col-md-12'>{this.props.cityName.toUpperCase()}</h4>
        <table>
        <thead>
        <tr>
        <th className='col-md-8'>10 Day Forecast</th>
        <th className='col-md-4'>Time Of Day</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weatherResults.map((result) => (
          <WeatherResultEntry forecast={result.fcttext} timeOfDay={result.title} />
          
        ))}
        </tbody>
        </table>
        </div>
      )
    } else {
      return <div>
            </div>
    }
  }
}


export default Weather;