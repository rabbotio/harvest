import Util from './util'

class bx {

  static exchange = 'bx'
  static API_URL = `https://bx.in.th/api/`

  static async getPairs() {
    const { API_URL, parse } = bx
    const { getJSON } = require('@rabbotio/fetcher')
    const json = await getJSON(API_URL)
    return parse(json)
  }

  static async getPrice(from, to) {
    const pairs = await bx.getPairs()
    return Util.getPairInfo(pairs, from, to)
  }

  static parse(data): any {
    const { exchange } = bx
    let result = {}
    const map = new Map(Object.entries(data))
    map.forEach(value => {
      const { bids, asks } = value.orderbook
      const pair = `${value.secondary_currency}_${value.primary_currency}`

      result[pair] = {
        exchange,
        pair,
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

  static getTradeFee() {
    return 0.25
  }

  static getWithdrawFee(symbol) {
    const fee = {
      ETH: 0.005,
      OMG: 0.2
    }

    return fee[symbol]
  }
}

module.exports = bx