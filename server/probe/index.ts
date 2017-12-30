const { getJSON, postJSON } = require('@rabbotio/fetcher')

class Probe {

  async getPair(exchange) {
    const bx = require('./adapters/bx')
    const results = await getJSON(`https://bx.in.th/api/`).then(json => bx.parse(json))
    return results
  }

  async getPrices(exchange, from, to) {
    const pair = await this.getPair(exchange)
    let prices = pair[(`${from}_${to}`).toUpperCase()]

    // Swap?
    if (!prices && pair[`${to}_${from}`]) prices = 1 / pair[`${to}_${from}`]

    return prices
  }

  async fetch() {
    // thb -> eth -> xmr -> thb
    // TODO : use real price

    await getJSON(`https://api.binance.com/api/v3/ticker/price`, { symbol: 'XMRETH' }).then(console.log)
    // {"symbol":"XMRETH","price":"0.47532000"}

    // await fetch('https://api.binance.com/api/v3/ticker/price?symbol=XMRETH').then(res => res.json()).then(console.log)

    // TODO : Market adapter
    // TODO : GraphQL

    const factor = {
      loading: false,

      tradingFees: {
        bx: 0.25,
        binance: 0.1
      },

      // TODO : define const and recheck at page https://support.binance.com/hc/en-us/articles/115000429332
      withdrawFees: {
        bx: {
          eth: 0.005,
          omg: 0.2
        },
        binance: {
          eth: 0.01,
          omg: 0.3
        }
      },

      // TODO : fetch from https://github.com/donbobvanbirt/coin-ticker
      prices: [
        {
          last: 26574.999657655392881,
          pair: 'eth_thb',
          exchange: 'bx'
        },
        {
          last: 1 / 26574.999657655392881,
          pair: 'thb_eth',
          exchange: 'bx'
        },
        {
          last: 569.5, // 587.766,
          pair: 'omg_thb',
          exchange: 'bx'
        },
        {
          last: 0.021317,
          pair: 'omg_eth',
          exchange: 'binance'
        },
        {
          last: 1 / 0.021317,
          pair: 'eth_omg',
          exchange: 'binance'
        }
      ]
    }

    return results
  }
}

module.exports = Probe