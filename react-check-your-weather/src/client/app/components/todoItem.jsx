import React from 'react';

const TodoItem = ({removeTodo, text, id}) => {

  const removeTodoItem = (e) => {
    console.log(e.target.value, 'this is the value');
    console.log(id, 'this is the id')
    removeTodo(id);
  }

  return (<li onClick={removeTodoItem}>{text}</li>
    )
}

export default TodoItem;