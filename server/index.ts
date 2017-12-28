// Pre
require('./lib/pre')

const init = async () => {
  // GraphQL server
  const GraphQLServer = require('./graphql-server')
  const schema = require('./schemas')
  const { baseURL } = require('./config')
  const graphQLServer = new GraphQLServer(baseURL, schema)
  return graphQLServer.start()
}

init()