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