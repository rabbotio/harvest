import React from 'react'
import Footer from './Footer'
import ClearTodo from '../containers/ClearTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <Footer />
    <ClearTodo />
    <ul>
      <AddTodo />
      <VisibleTodoList />
    </ul>
  </div>
)
export default App
