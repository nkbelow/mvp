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
        <div>
        <button className='btn btn-default btn-success' onClick={this.addComment.bind(this)} type='button'>Add Your Comment</button>
        </div>
        <div>
        <button type='button' className='btn btn-default btn-success' onClick={this.getComments.bind(this)}> Get Comments </button>
        </div>
        </div>

      
    )
  }
}

export default CommentMenu;

