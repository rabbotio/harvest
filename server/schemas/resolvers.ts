import Model from '../model'

const resolvers = {
  Query: {
    price: (root, { exchange, from, to }, context) => Model.getPrice(exchange, from, to),
    // tradeFee: (root, { exchange }, context) => Model.getTradeFee(exchange),
    tradeFees: (root, { }, context) => Model.getTradeFees(),
    // withDrawFees: (root, { }, context) => Model.getWithdrawFees(),
    // routes: (root, { fund, from, fromExchange, toExchange }, context) => Model.getRoute(fund, from, fromExchange, toExchange)
  },
  Mutation: {
    // setContent: (_, { bar }, context) => _contents.push(bar)
  }
}

module.exports = resolvers
