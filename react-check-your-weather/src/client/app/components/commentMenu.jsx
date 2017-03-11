import React from 'react';

class CommentMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  addComment(e) {
    const comment = this.refs.comment.value;
    if (comment) {
      this.props.addComment(comment);
      this.refs.comment.value = '';
    }
  }

  render() {
    return (
      <div id='commentMenu'> 
        <form action='127.0.0.1:3000/comment' id='commentForm' >
        
        <textarea name='comment' form='commentForm' ref='comment'>
        </textarea>
        </form>
        <input onClick={this.addComment.bind(this)} type='submit' />
        </div>

      
    )
  }
}

export default CommentMenu;

