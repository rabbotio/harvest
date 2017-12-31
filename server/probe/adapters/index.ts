class Adapter {

  static getTradeFee(exchange) {
    return require(`./${exchange}`).getTradeFee()
  }

  static getWithdrawFee(exchange, symbol) {
    return require(`./${exchange}`).getWithdrawFee(symbol)
  }
}

module.exports = Adapter