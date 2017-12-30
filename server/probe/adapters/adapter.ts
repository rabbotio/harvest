class Adapter {
  static getRate(pair, from, to) {
    let rate = pair[(`${from}_${to}`).toUpperCase()]

    // Swap?
    if (!rate && pair[`${to}_${from}`]) rate = 1 / pair[`${to}_${from}`]
    return rate
  }
}

module.exports = Adapter