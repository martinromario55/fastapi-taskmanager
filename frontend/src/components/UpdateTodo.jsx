import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import TodosContext from '../utils/TodosContext'

const UpdateTodo = ({ item, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [todo, setTodo] = useState()
  const { fetchTodos } = useContext(TodosContext)

  const updateTodo = async () => {
    await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: todo,
      }),
    })
    onClose()
    await fetchTodos()
  }
  return (
    <>
      <Button
        h="2rem"
        fontSize="1rem"
        fontWeight="bold"
        colorScheme="blue"
        borderRadius="md"
        _hover={{ bg: 'facebook.500' }}
        size="sm"
        onClick={onOpen}
      >
        Update Todo
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Update Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Update Todo item"
                  aria-label="Add a todo item"
                  value={todo}
                  onChange={e => setTodo(e.target.value)}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                h="2rem"
                fontSize="1rem"
                fontWeight="bold"
                colorScheme="twitter"
                borderRadius="10px"
                boxShadow="md"
                _hover={{ bg: 'facebook.500' }}
                size="sm"
                onClick={updateTodo}
              >
                Update Todo
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

export default UpdateTodo
