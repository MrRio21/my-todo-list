import React from 'react'
import Todo from './Todo'
// import

const Todos = (props) => {
  return (
    <div className='todos-list'>
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          toggleTodo={props.toggleTodo}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      ))}
    </div>
  )
}

export default Todos
