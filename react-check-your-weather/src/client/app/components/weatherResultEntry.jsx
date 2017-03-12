import React from 'react';


class WeatherResultEntry extends React.Component {
  constructor(props) {
    super(props)
  }

	
  render() {
    return (
      <tr>
      <td className='col-md-8'>{this.props.forecast}</td>
      <td className='col-md-4'>{this.props.timeOfDay}</td>
      </tr>
    )
  }
}

export default WeatherResultEntry;