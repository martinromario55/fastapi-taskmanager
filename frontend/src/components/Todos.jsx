import React, { useEffect, useState } from 'react'
import { Stack } from '@chakra-ui/react'
import TodosContext from '../utils/TodosContext'
import AddTodo from './AddTodo'
import RenderTodos from './RenderTodos'

const Todos = () => {
  const [todos, setTodos] = useState([])

  //   Get Todos
  const fetchTodos = async () => {
    const response = await fetch('http://localhost:8000/todos')
    const data = await response.json()
    // console.log('Data', data.data)
    setTodos(data.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      <AddTodo />
      <Stack spacing={5}>
        {todos.map(todo => (
          //   <b>{todo?.item}</b>
          <RenderTodos
            item={todo?.item}
            id={todo?.id}
            fetchTodos={fetchTodos}
          />
        ))}
      </Stack>
    </TodosContext.Provider>
  )
}

export default Todos
