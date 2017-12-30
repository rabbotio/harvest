class binance {

  static API_URL = `https://api.binance.com/api/v3/`

  static async getPrice(from, to) {
    const { getJSON } = require('@rabbotio/fetcher')
    const json = await getJSON(`${binance.API_URL}ticker/price`, { symbol: `${from}${to}` })
    const pair = binance.parse(json)
    const Adapter = require('./adapter')

    return Adapter.getRate(pair, from, to)
  }

  static parse(data): any {
    const from = data.symbol.substring(0, 3)
    const to = data.symbol.substring(3, 6)
    const last = Number(data.price)
    const pair = `${from}_${to}`

    return {
      [pair]: {
        exchange: 'binance',
        pair,
        last
      }
    }
  }

  static getTradeFee() {
    return 0.1
  }

  // Ref : https://support.binance.com/hc/en-us/articles/115000429332
  static getWithdrawFee(symbol) {
    const fee = {
      eth: 0.01,
      omg: 0.3
    }

    return fee[symbol]
  }
}

module.exports = binance