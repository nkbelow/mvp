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

  getComments (e) {
    this.props.getComments();
  }

  render() {
    return (
      <div id='commentMenu'> 
      
        <form id='commentForm' >
        <h4> Let Us Know How Your Day Was </h4>
        <textarea name='comment' form='commentForm' ref='comment'>
        </textarea>
        </form>
        <input onClick={this.addComment.bind(this)} type='submit' />
        <button type='button' onClick={this.getComments.bind(this)}> Get Comments </button>
        </div>

      
    )
  }
}

export default CommentMenu;

