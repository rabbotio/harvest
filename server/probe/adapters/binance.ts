class binance {
  static parse(data): any {
    console.log(data)
    const from = data.symbol.substring(0, 3)
    const to = data.symbol.substring(3, 6)
    const last = data.price

    return {
      exchange: 'binance',
      pair: `${from}_${to}`,
      last: Number(last)
    }
  }
}

module.exports = binance