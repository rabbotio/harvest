import {
  GraphQLScalarType,
  Kind,
  IntValueNode,
} from 'graphql'

const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      const intValue: IntValueNode = <IntValueNode>ast;
      return parseInt(intValue.value, 10);
    }
    return null;
  },
});

const _typeDefs = `
scalar Date

type Exchange { 
  id: String,
  tokens: [String]
}

type Price {
  exchange: String,
  pair: String,
  last: Float
  change: Float,
  volume: Float,
  bid_total: Int,
  bid_volume: Float,
  bid_highest: Float,
  ask_total: Int,
  ask_volume: Float,
  ask_highest: Float,
}

type Path {
  type: String!,
  text: String!
}

type Route {
  profit: String!,
  fee: String!,
  paths: [Path]
}

type Query {
  prices(exchange:String!, from:String!, to:String!): Price,
  routes(from:String!, to:String!, volume:String!): [Route]
}

type TradeResult implements ActionResult {
  from: String!,
  to: String!,
  price: Float!,
  from_volume: Float!,
  to_volume: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
}

type WithdrawResult implements ActionResult {
  volume: Float!,
  fee: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
}

type DepositResult implements ActionResult {
  volume: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
}

type TransferResult implements ActionResult {
  from: String!,
  to: String!,
  fee: Float!,
  from_volume: Float!,
  to_volume: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
}

interface ActionResult
{
  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
}

type Arbitrage {
  index: Int!,

  # deposit, trade, withdraw
  action: String!,

  # DepositResult, TradeResult, WithdrawResult
  result: ActionResult!
}

type ArbitrageResult {
  paths:[Arbitrage]
}

type Mutation {
  # trade 100 OMG THB BX
  trade(volume: Float!, from: String!, to:String!, exchange: String!): TradeResult,

  # withdraw 100 OMG BINANCE BX
  withdraw(volume: Float!, symbol: String!, from: String!, to:String!): WithdrawResult,

  # deposit 100 OMG BX
  deposit(volume: Float!, symbol: String!, exchange:String!): DepositResult,

  # transfer 100 OMG BINANCE BX // Will withdraw -> deposit -> trade -> withdraw -> deposit
  transfer(volume: Float!, symbol: String!, from: String!, to:String! ): TransferResult

  # arbitrage 100 THB 20% // Will transfer if profit condition has been met
  arbitrage(volume: Float!, symbol: String!, profit: Float!): ArbitrageResult
}

schema {
  query: Query
  mutation: Mutation
}
`

module.exports = _typeDefs