import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const CLEAR_TODO = gql`
  mutation clearTodo {
    clearTodo @client
  }
`

const clearRoute = mutate => {
  mutate({ mutation: 'clearTodo' })
}

const ClearTodo = ({ mutate }) => {
  return (
    <button onClick={() => clearRoute(mutate)}>
      Clear
    </button>
  )
}

export default graphql(CLEAR_TODO)(ClearTodo)
