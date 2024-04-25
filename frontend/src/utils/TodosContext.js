import { createContext } from 'react'

const TodosContext = createContext({
  todos: [],
  fetchTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
})

export default TodosContext
