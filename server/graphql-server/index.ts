const Server = require('./Server')

class GraphQLServer extends Server {
  constructor (baseURL, schema, options = {}) {
    super(baseURL, options)

    // GraphQL
    const { endpointURL = '/graphql' } = options
    const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
    this._app.use(endpointURL, graphqlExpress({ schema }))
    console.info(`GraphQL  : ${baseURL}${endpointURL}`)

    // GraphiQL
    const { graphiqlEnabled = process.env.NODE_ENV !== 'production' } = options
    if (graphiqlEnabled) {
      const graphiqlPath = '/graphiql'
      this._app.get(graphiqlPath, graphiqlExpress({ endpointURL }))
      console.info(`GraphiQL : ${baseURL}${graphiqlPath}`)
    }
  }
}

module.exports = GraphQLServer
