import Model from '../model'

const resolvers = {
  Query: {
    price: (root, { exchange, from, to }, context) => Model.getPrice(exchange, from, to),
    prices: (root, _, context) => Model.getPrices(),
    // tradeFee: (root, { exchange }, context) => Model.getTradeFee(exchange),
    tradeFees: (root, { }, context) => Model.getTradeFees(),
    withdrawFees: (root, { }, context) => Model.getWithdrawFees(),
    // routes: (root, { fund, from, fromExchange, toExchange }, context) => Model.getRoute(fund, from, fromExchange, toExchange)
  },
  Mutation: {
    // setContent: (_, { bar }, context) => _contents.push(bar)
  }
}

module.exports = resolvers
