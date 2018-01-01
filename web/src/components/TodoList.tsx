import * as React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const { todos, onTodoClick } = props
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
    </div>
  )
}

export default TodoList
