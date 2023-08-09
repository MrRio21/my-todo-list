import React from 'react'
import FeatherIcons from 'feather-icons-react'

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo, mode }) => {
  return (
    <div className={`todos-todo ${todo.done ? 'done' : ''}`}>
      <div className='todos-todo_icon' onClick={() => toggleTodo(todo.id)}>
        <FeatherIcons icon={todo.done ? 'check-circle' : 'circle'} />
      </div>
      <div className='todos-todo_text'>{todo.title}</div>
      {mode !== 'edit' && (
        <div className='todos-todo_cta'>
          <div className='todos-todo_cta-edit' onClick={() => editTodo(todo)}>
            <FeatherIcons icon={'edit'} size={20} />
          </div>
          <div
            className='todos-todo_cta-delete'
            onClick={() => deleteTodo(todo.id)}
          >
            <FeatherIcons icon={'trash-2'} size={20} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
