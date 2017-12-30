export default `
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
`