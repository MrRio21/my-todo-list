import React from 'react'
import FeatherIcons from 'feather-icons-react'


const Todo = () => {
  return (
    <div className='todos-todo'>
      <div className="todos-todo_icon"></div>
      <div className="todos-todo_text"> مهمة 1</div>
      <div className="todos-todo_cta">
      <div className="todos-todo_cta-edit">
        <FeatherIcons icon={'edit'} size={20}/>
      </div>
      <div className="todos-todo_cta-delete">
        <FeatherIcons icon={'trash-2'} size={20}/>
      </div>

      </div>
    </div>
  )
}

export default Todo