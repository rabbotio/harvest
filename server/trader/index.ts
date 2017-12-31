import Model from '../model'

class Trader {
  async deposit(volume, fromSymbol, toExchange) {
    throw new Error('TODO : consume API and do real withdraw')
  }

  async trade(volume, fromSymbol, baseSymbol, fromExchange) {
    throw new Error('TODO : consume API and do real trade')
  }

  async withdraw(volume, fromSymbol, fromExchange) {
    throw new Error('TODO : consume API and do real withdraw')
  }
}

module.exports = Trader