import gql from 'graphql-tag'

let nextTodoId = 0
const todos = {
  defaults: {
    todos: []
  },
  resolvers: {
    Mutation: {
      clearTodo: (_, __, { cache }) => {
        cache.writeData({
          data: {
            todos: []
          }
        })
        return true
      },
      addTodo: (_, { text, completed = false }, { cache }) => {
        const query = gql`
          query GetTodos {
            todos @client {
              id
              text
              completed
            }
          }
        `
        const previous = cache.readQuery({ query })
        const newTodo = {
          id: nextTodoId++,
          text,
          completed,
          __typename: 'TodoItem'
        }
        const data = {
          todos: previous.todos.concat([newTodo])
        }
        cache.writeData({ data })
        return newTodo
      },
      toggleTodo: (_, variables, { cache }) => {
        console.log('Do something when click?')
        /*
        const id = `TodoItem:${variables.id}`
        const fragment = gql`
          fragment completeTodo on TodoItem {
            completed
          }
        `
        const todo = cache.readFragment({ fragment, id })
        const data = { ...todo, completed: !todo.completed }
        cache.writeData({ id, data })
        return null
        */
      }
    }
  }
}

export default todos
