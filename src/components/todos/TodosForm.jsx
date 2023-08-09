import React, { useState } from 'react'
import FeatherIcons from 'feather-icons-react'

const TodosForm = ({ addNewTodo, toggleFilter, mode, activeTodo }) => {
  // const defaultTitle = mode === 'edit' ? activeTodo.title : ''
  const [title, setTitle] = useState('')
  const [editRender, setEditRender] = useState(false)

  if (mode === 'edit' && !editRender) {
    setTitle(activeTodo.title)
    setEditRender(true)
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const handleAddNewTodo = () => {
    setEditRender(false)
    if (!title.trim()) {
      alert('الرجاء كتابة عنوان المهمة')
      return
    }
    addNewTodo(title)
    setTitle('')
  }
  return (
    <div className='todos-form'>
      <div
        className={`todos-form_icon ${mode === 'filter' ? 'active' : ''}`}
        onClick={toggleFilter}
      >
        <FeatherIcons icon='circle' />
      </div>
      <div className='todos-form_form'>
        <input
          type='text'
          placeholder='اضف مهمة جديدة ...'
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className='todos-form_submit'>
        <button
          className='btn'
          type='submit'
          disabled={!title.trim()}
          onClick={handleAddNewTodo}
        >
          {mode === 'edit' ? 'تعديل' : 'اضافة'}
        </button>
      </div>
    </div>
  )
}

export default TodosForm
