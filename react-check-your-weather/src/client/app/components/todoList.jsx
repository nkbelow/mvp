import React from 'react';
import TodoForm from './todoForm.jsx';
import AddTodoButton from './addTodoButton.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      todos: []
    }
  }

  addTodo(text, id) {
    this.state.todos.push({text, id});
    this.setState({
      todos: this.state.todos
    });
    console.log(this.state.todos, 'here are the todos')
  }

  removeTodo(id) {
    console.log('this is the top level id', id)
    const remainder = this.state.todos.filter((todo) => {
      console.log('this is the todo', todo)
      if (todo.id !== id) {
        return todo;
      }
    })
    console.log(remainder, 'tis remainder')
    this.setState({
      todos: remainder
    })
  }

  render() {
    return (
    <div>
    <h1> Today's Checklist </h1>
     <AddTodoButton addTodo={this.addTodo.bind(this)} />
     <TodoForm todos={this.state.todos} removeTodo={this.removeTodo.bind(this)} />
     
    </div>

    )
  }
}
  

  

export default TodoList;