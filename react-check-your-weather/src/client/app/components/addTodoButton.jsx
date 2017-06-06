import React from 'react';
import {v4} from 'uuid';

const AddTodoButton = ({addTodo}) => {
  let input;
  const addTodoItem = () => {
    let id = v4()
    addTodo(input.value, id);
    input.value = '';
  };

  return (
    <div className='addTodoButton'>
    <input ref={node => {
      input = node;
    }} />
    <button onClick={addTodoItem}>+</button>
    </div>
  )
}

export default AddTodoButton;