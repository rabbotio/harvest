import * as React from 'react'
//import Footer from './Footer'
import ClearTodo from '../containers/ClearTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <ClearTodo />
    <ul>
      <AddTodo />
      <VisibleTodoList />
    </ul>
  </div>
)
export default App
