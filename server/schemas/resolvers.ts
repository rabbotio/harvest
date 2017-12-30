let _contents = []

const probe = new (require('../probe'))()

const resolvers = {
  Query: {
    prices: (root, { exchange, from, to }, context) => probe.getPrices(exchange, from, to),
    routes: (root, { fund, begin, end }, context) => probe.getRoute(fund, begin, end)
  },
  Mutation: {
    // setContent: (_, { bar }, context) => _contents.push(bar)
  }
}

module.exports = resolvers
