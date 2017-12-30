class bx {
  static parse(data): any {
    let result = {}
    const map = new Map(Object.entries(data))
    map.forEach(value => {
      const { bids, asks } = value.orderbook
      result[`${value.secondary_currency}_${value.primary_currency}`] = {
        exchange: 'bx',
        pair: `${value.secondary_currency}_${value.primary_currency}`,
        last: value.last_price,
        change: value.change,
        volume: value.volume_24hours,
        bid_total: bids.total,
        bid_volume: bids.volume,
        bid_highest: bids.highbid,
        ask_total: asks.total,
        ask_volume: asks.volume,
        ask_highest: asks.highbid,
      }
    })

    return result
  }
}

module.exports = bx