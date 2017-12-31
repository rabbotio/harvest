class Adapter {
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