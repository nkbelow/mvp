import React from 'react';
import TodoItem from './todoItem.jsx';

const TodoForm = ({todos, removeTodo}) => {

  return (
    <div>
    <ul>
    {todos.map((todo, i) => {
      return <TodoItem removeTodo={removeTodo} text={todo.text} id={todo.id} key={i}/>
    })}
    </ul>


    </div>

    )
}

export default TodoForm;