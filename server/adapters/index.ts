class Adapter {

  static getTradeFees() {
    return {
      bx: 0.25,
      binance: 0.1
    }
  }

  static getWithdrawFees() {
    return {
      bx: {
        eth: 0.005,
        omg: 0.2
      },
      binance: {
        eth: 0.01,
        omg: 0.3
      }
    }
  }

  static getTradeFee(exchange) {
    return require(`./${exchange}`).getTradeFee()
  }

  static getWithdrawFee(exchange, symbol) {
    return require(`./${exchange}`).getWithdrawFee(symbol)
  }

  static async getPrice(exchange: String, from: String, to: String) {
    const adapter = require(`./${exchange}`)
    const price = await adapter.getPrice(from, to)
    return price
  }
}

export default Adapter