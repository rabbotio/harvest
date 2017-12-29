const { getJSON, postJSON } = require('@rabbotio/fetcher')

class Harvester {
  async fetch() {
    // thb -> eth -> xmr -> thb
    // TODO : use real price
    await getJSON(`https://bx.in.th/api/`).then(console.log)
    // https://api.binance.com//api/v3/ticker/price?symbol=XMRETH
    // {"symbol":"XMRETH","price":"0.47532000"}

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
    return factor.prices
  }
}

module.exports = Harvester