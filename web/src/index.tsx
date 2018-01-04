/*
import * as React from 'react'
import { render } from 'react-dom'

import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const GRAPHQL_END_POINT = 'http://localhost:4000/graphql'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_END_POINT }),
  cache: (new InMemoryCache()).restore({})
})

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(ApolloApp, document.getElementById('root'))
*/

import * as React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, HttpLink, InMemoryCache } from 'apollo-client-preset'
import { withClientState } from 'apollo-link-state'
import { ApolloProvider } from 'react-apollo'
import merge from 'lodash.merge'

import App from './App'
import todos from './resolvers/todos'
import visibilityFilter from './resolvers/visibilityFilter'

const GRAPHQL_END_POINT = 'http://localhost:4000/graphql'

const cache = new InMemoryCache()

const ExchangeStateResolver = {
  resolvers: {
    Query: {
      exchangeState: (_, args, { cache }) => {
        return {
          fromExchange: 'bx',
          toExchange: 'binance'
        }
      }
    },
    defaults: {
      exchangeState: {
        fromExchange: 'bx',
        toExchange: 'binance'
      }
    },
    Mutation: {
      exchangeState: (_, args, context) => {
        context.cache.writeData({
          data: {
            exchangeState: args.value
          }
        })
        return null
      }
    }
  }
}

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    withClientState({ ...merge(ExchangeStateResolver, todos, visibilityFilter), cache }),
    new HttpLink({ uri: GRAPHQL_END_POINT }),
  ]),
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
