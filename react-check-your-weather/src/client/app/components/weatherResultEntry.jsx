import React from 'react';


class WeatherResultEntry extends React.Component {
  constructor(props) {
    super(props)
  }

	
  render() {
    return (
      <tr>
      <td>{this.props.forecast}</td>
      <td>{this.props.timeOfDay}</td>
      </tr>
    )
  }
}

export default WeatherResultEntry;