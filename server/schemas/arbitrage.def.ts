export default `
interface ActionPlan
{
  start_at: Date!,
  stop_at: Date!,
  latency: Float!
}

type TradePlan implements ActionPlan {
  from: String!,
  to: String!,
  price: Float!,
  from_volume: Float!,
  to_volume: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!
}

type WithdrawPlan implements ActionPlan {
  volume: Float!,
  fee: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!
}

type DepositPlan implements ActionPlan {
  volume: Float!,

  start_at: Date!,
  stop_at: Date!,
  latency: Float!
}

type TransferPlan implements ActionPlan {
  from: String!,
  to: String!,
  fee: Float!,
  from_volume: Float!,
  to_volume: Float!,

  start_at: Date!,
  stop_at: Date!,
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
  start_at: Date!,
  stop_at: Date!,
  latency: Float!,
  succeed: Boolean!
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