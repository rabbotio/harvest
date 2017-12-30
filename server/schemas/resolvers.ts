let _contents = []

const probe = new (require('../probe'))()

const resolvers = {
  Query: {
    prices: (root, { exchange, from, to }, context) => probe.getPrice(exchange, from, to),
    routes: (root, { fund, from, from_exchange, to_exchange }, context) => probe.getRoute(fund, from, from_exchange, to_exchange)
  },
  Mutation: {
    // setContent: (_, { bar }, context) => _contents.push(bar)
  }
}

module.exports = resolvers
