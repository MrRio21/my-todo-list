import React from 'react'
import FeatherIcons from 'feather-icons-react'

const TodosForm = () => {
  return (
    <div className='todos-form'>
      <div className='todos-form_icon'>
        <FeatherIcons icon ='circle' />
      </div>
      <div className='todos-form_form'>
        <input type="text" placeholder="اضف مهمة جديدة ..." />
      </div>
      <div className='todos-form_submit'>
        <button  className='btn'>اضافة</button>
      </div>
    </div>
  )
}

export default TodosForm