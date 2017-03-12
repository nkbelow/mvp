import React from 'react';
import CommentListEntry from './commentListEntry.jsx';

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.comments);
    return (
      <div id='commentList'> 
      <ul>
      {this.props.comments.map((comment) => {
        return <CommentListEntry comment={comment.text} />
      })}
      </ul>
      </div>
    )
  }
}


export default CommentList;