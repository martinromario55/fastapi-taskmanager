import React, { useContext, useState } from 'react'
import TodosContext from '../utils/TodosContext'
import { Input, InputGroup } from '@chakra-ui/react'

const AddTodo = () => {
  const [item, setItem] = useState('')
  const { todos, fetchTodos } = useContext(TodosContext)

  const handleInput = e => {
    setItem(e.target.value)
  }

  const handleSubmit = e => {
    const newTodo = {
      id: todos.length + 1,
      item: item,
    }

    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then(fetchTodos)
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          m="1rem"
          type="text"
          placeholder="Add Todo"
          aria-label="Add a todo item"
          border="1px solid blue"
          onChange={handleInput}
          required
          autoFocus
          autoComplete="off"
        />
      </InputGroup>
    </form>
  )
}

export default AddTodo
