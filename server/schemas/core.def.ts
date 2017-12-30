export default `
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

type Query {
  prices(exchange:String!, from:String!, to:String!): Price,
  routes(from:String!, to:String!, volume:String!): [Route]
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