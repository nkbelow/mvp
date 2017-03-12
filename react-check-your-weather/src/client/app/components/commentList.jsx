import React from 'react';

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }

  getComments (e) {
    this.props.getComments();
  }

  render() {
    return (
      <div> 
      <button type='button' onClick={this.getComments.bind(this)}> Get Comments </button>
      {this.props.comments}
      </div>
    )
  }
}


export default CommentList;