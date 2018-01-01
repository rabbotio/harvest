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

/*
import * as React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import merge from 'lodash.merge'

import Guide from './components/Guide'
import todos from './resolvers/todos'
import visibilityFilter from './resolvers/visibilityFilter'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: withClientState({ ...merge(todos, visibilityFilter), cache })
})

render(
  <ApolloProvider client={client}>
    <Guide />
  </ApolloProvider>,
  document.getElementById('root')
)
*/
