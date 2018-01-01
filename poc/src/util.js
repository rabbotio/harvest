class Util {
  static getPrice (pair, from, to) {
    // Rate
    let rate = pair[`${from}_${to}`]
    if (rate) return rate

    // Swap?
    const swappedRate = pair[`${to}_${from}`]
    if (!swappedRate) throw new Error('Pair not exist')

    // Swap from normal rate
    return 1 / swappedRate
  }
}

export default Util
