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
          mode={props.mode}
        />
      ))}

      {props.todos.length === 0 && (
        <h3 className='no-todos'> لا توجد مهام حالية ...</h3>
      )}
    </div>
  )
}

export default Todos
