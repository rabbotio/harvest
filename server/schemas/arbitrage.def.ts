export default `
interface ActionPlan
{
  beginAt: Date!,
  endAt: Date!,
  latency: Float!
}

type TradePlan implements ActionPlan {
  from: String!,
  to: String!,
  price: Float!,
  before: Float!,
  output: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!
}

type WithdrawPlan implements ActionPlan {
  volume: Float!,
  fee: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!
}

type DepositPlan implements ActionPlan {
  volume: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!
}

type TransferPlan implements ActionPlan {
  from: String!,
  to: String!,
  fee: Float!,
  before: Float!,
  output: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!
}

type Route {
  profit: String!,
  deduct: String!,
  latency: Float!  
  plans: [ActionPlan]!
}

interface ActionResult
{
  beginAt: Date!,
  endAt: Date!,
  latency: Float!,
  succeed: Boolean!
}

type TradeResult implements ActionResult {
  from: String!,
  to: String!,
  price: Float!,
  input: Float!,
  output: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!,
  succeed: Boolean!
}

type WithdrawResult implements ActionResult {
  volume: Float!,
  fee: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!,
  succeed: Boolean!
}

type DepositResult implements ActionResult {
  volume: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!,
  succeed: Boolean!
}

type TransferResult implements ActionResult {
  from: String!,
  to: String!,
  fee: Float!,
  before: Float!,
  output: Float!,

  beginAt: Date!,
  endAt: Date!,
  latency: Float!,
  succeed: Boolean!
}

type Arbitrage {
  # deposit, trade, withdraw
  plan: ActionPlan!,

  # DepositResult, TradeResult, WithdrawResult
  result: ActionResult!
}

type ArbitrageResult {
  results: [Arbitrage]!
}
`