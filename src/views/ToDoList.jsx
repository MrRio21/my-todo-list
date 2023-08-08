import React, { useState } from 'react'
import TodosForm from '../components/todos/TodosForm'
import Todos from '../components/todos/Todos'

const initialData = [
  { id: 1, title: 'شراء مستلزمات', done: true },
  { id: 2, title: 'تسويق المنتج', done: false },
  { id: 3, title: 'عمل البحث عن ', done: true },
  { id: 4, title: 'اكمال كورس الرياكت', done: false },
]

const ToDoList = () => {
  const [todos, setTodos] = useState(initialData)

  const toggleTodo = (id) => {
    setTodos((data) => {
      let newData = data.map((td) => {
        if (td.id === id) {
          // td.done = !td.done
          return { ...td, done: !td.done }
        }
        return td
      })
      return newData
    })
  }

  const deleteTodo = (id) => {
    setTodos((data) => {
      const newData = data.filter((td) => td.id !== id)
      return newData
    })
  }

  return (
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm />
          <Todos
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </main>
  )
}

export default ToDoList
