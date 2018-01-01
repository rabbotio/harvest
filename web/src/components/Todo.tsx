import * as React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      fontSize: completed ? 'small' : 'normal',
      color: completed ? 'gray' : 'black'
    }}
  >
    {text}
  </li>
)

export default Todo
