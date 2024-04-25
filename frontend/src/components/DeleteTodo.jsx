import React, { useContext } from 'react'
import TodosContext from '../utils/TodosContext'
import { Button } from '@chakra-ui/react'

const DeleteTodo = ({ id }) => {
  const { fetchTodos } = useContext(TodosContext)

  const deleteTodo = async () => {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { id: id },
    })
    await fetchTodos()
  }
  return (
    <Button
      h="2rem"
      fontSize="1rem"
      fontWeight="bold"
      colorScheme="red"
      borderRadius="10px"
      boxShadow="md"
      _hover={{ bg: 'red.700' }}
      size="sm"
      ml="2rem"
      onClick={deleteTodo}
    >
      Delete Todo
    </Button>
  )
}

export default DeleteTodo
