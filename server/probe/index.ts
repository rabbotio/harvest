class Probe {
  async getPrice(exchange: String, from: String, to: String) {
    const adapter = require(`./adapters/${exchange}`)
    const price = await adapter.getPrice(from, to)
    return price
  }

  async trade(output, fromExchange, fromSymbol, baseSymbol) {
    const price = await this.getPrice(fromExchange, fromSymbol, baseSymbol)
    output.result *= price.latest
  }

  async fee(output, exchange) {
    const adapter = require(`./adapters/${exchange}`)
    const fee = await adapter.getFee
      (output.result *= 1 - tradingFees[exchange] / 100)
  }

  async getRoute(fund: Number, fromSymbol: String, fromExchange: String, toExchange: String, baseSymbol: String = 'ETH') {
    // TODO
    throw new Error('TODO')
  }
}

module.exports = Probe