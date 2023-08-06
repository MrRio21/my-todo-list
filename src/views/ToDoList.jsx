import React from 'react'
import TodosForm from '../components/todos/TodosForm'
import Todos from '../components/todos/Todos'

const ToDoList = () => {
  return(
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm/>
          <Todos/>
        </div>
      </div>
    </main>
  
  )
}

export default ToDoList