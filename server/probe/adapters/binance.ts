class binance {

  static API_URL = `https://api.binance.com/api/v3/`

  static async getPrice(from, to) {
    const { getJSON } = require('@rabbotio/fetcher')
    const json = await getJSON(`${binance.API_URL}ticker/price`, { symbol: `${from}${to}` })

    //const json = await getJSON(`https://api.binance.com/api/v3/ticker/price?symbol=XMRETH`)
    // const json = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=XMRETH').then(res => res.json())
    const pair = binance.parse(json)
    const Adapter = require('./adapter')
    return Adapter.getRate(pair, from, to)
  }

  static parse(data): any {
    const from = data.symbol.substring(0, 3)
    const to = data.symbol.substring(3, 6)
    const last = data.price

    return {
      [`${from}_${to}`]: {
        exchange: 'binance',
        pair: `${from}_${to}`,
        last: Number(last)
      }
    }
  }
}

module.exports = binance