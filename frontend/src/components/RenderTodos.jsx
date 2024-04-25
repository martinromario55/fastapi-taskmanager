import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import UpdateTodo from './UpdateTodo'
import DeleteTodo from './DeleteTodo'

const RenderTodos = ({ item, id, fetchTodos }) => {
  return (
    <Box p="1rem" shadow="sm">
      <Flex justify="space-between">
        <Text mt={4} as={'div'}>
          <UnorderedList>
            <ListItem>
              {item}
              <Flex align="end" mt="1rem">
                <UpdateTodo item={item} id={id} fetchTodos={fetchTodos} />
                <DeleteTodo id={id} fetchTodos={fetchTodos} />
              </Flex>
            </ListItem>
          </UnorderedList>
        </Text>
      </Flex>
    </Box>
  )
}

export default RenderTodos
