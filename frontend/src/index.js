import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import Header from './components/Header'
import Todos from './components/Todos'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <Header />
    <Todos />
  </ChakraProvider>
)
