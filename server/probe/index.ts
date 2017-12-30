class Probe {
  async getPrice(exchange: Number, from: String, to: String) {
    const adapter = require(`./adapters/${exchange}`)
    const price = await adapter.getPrice(from, to)
    return price
  }

  async getRoute(fund: Number, from: String, from_exchange: String, to_exchange: String) {
    // Predefined
    // TODO : getTradingFees(from_exchange)
    // TODO : getTradingFees(to_exchange)
    const tradingFees = {
      bx: 0.25,
      binance: 0.1
    }

    // Predefined
    // Ref : https://support.binance.com/hc/en-us/articles/115000429332
    // TODO : getWithdrawFees(from_exchange)
    // TODO : getWithdrawFees(to_exchange)
    const withdrawFees = {
      bx: {
        eth: 0.005,
        omg: 0.2
      },
      binance: {
        eth: 0.01,
        omg: 0.3
      }
    }

    return {

    }
  }
}

module.exports = Probe