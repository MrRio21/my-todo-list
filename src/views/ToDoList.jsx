import React, { useState } from 'react'
import TodosForm from '../components/todos/TodosForm'
import Todos from '../components/todos/Todos'

const initialData = JSON.parse(localStorage.getItem('todos')).length
  ? JSON.parse(localStorage.getItem('todos'))
  : [
      { id: 1, title: 'شراء مستلزمات', done: true },
      { id: 4, title: 'اكمال كورس الرياكت', done: false },
      { id: 3, title: ' البحث عن عمل ', done: true },
      { id: 2, title: 'اعمل بلوك لشادي', done: false },
    ]

const ToDoList = () => {
  const [todos, setTodos] = useState(initialData)

  const [mode, setMode] = useState('add')
  const [activeTodo, setActiveTodo] = useState(null)

  const setToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

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

  const addNewTodo = (title) => {
    if (mode !== 'edit') {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false,
      }

      setTodos((data) => {
        return [newTodo, ...data]
      })
    } else if (mode === 'edit') {
      const newTodo = todos.map((t) => {
        if (t.id === activeTodo.id) {
          t.title = title
        }
        return t
      })
      setTodos(newTodo)
      setMode('add')
    }
  }

  const toggleFilter = () => {
    if (mode === 'edit') {
      return
    } else if (mode === 'filter') {
      setMode('add')
    } else {
      setMode('filter')
    }
  }

  const editTodo = (todo) => {
    setMode('edit')
    setActiveTodo(todo)
  }

  let currentTodos = [...todos]
  if (mode === 'filter') {
    currentTodos = todos.filter((t) => !t.done)
  }

  if (mode === 'edit') {
    currentTodos = [activeTodo]
  }
  setToLocal()

  return (
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm
            addNewTodo={addNewTodo}
            toggleFilter={toggleFilter}
            mode={mode}
            activeTodo={activeTodo}
          />
          <Todos
            todos={currentTodos}
            toggleTodo={toggleTodo}
            mode={mode}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  )
}

export default ToDoList
