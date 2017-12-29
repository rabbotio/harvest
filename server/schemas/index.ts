const { makeExecutableSchema } = require('graphql-tools')

module.exports = makeExecutableSchema({
  typeDefs: require('./typeDefs'),
  resolvers: require('./resolvers')
})
