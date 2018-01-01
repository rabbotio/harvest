export default `
type Price {
  exchange: String!,
  pair: String!,
  last: Float!,
  change: Float,
  volume: Float,
  bid_total: Int,
  bid_volume: Float,
  bid_highest: Float,
  ask_total: Int,
  ask_volume: Float,
  ask_highest: Float,
}

type bxPairs {
  ETH_THB: Float!,
  OMG_THB: Float!,
}

type binancePairs {
  OMG_ETH: Float!
}

type Prices {
  bx: bxPairs!,
  binance: binancePairs!
}

type bxFees {
  ETH: Float!,
  OMG: Float!,
}

type binanceFees {
  ETH: Float!,
  OMG: Float!,
}

type TradeFee {
  bx: Float,
  binance: Float,
}

type WithdrawFee {
  bx: bxFees,
  binance: binanceFees,
}
`