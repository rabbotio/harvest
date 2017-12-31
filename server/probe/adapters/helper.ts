class Helper {
  static getRate(pair, from, to) {
    // Rate
    let rate = pair[(`${from}_${to}`).toUpperCase()]
    if (rate) return rate

    // Swap?
    const swapped = pair[`${to}_${from}`]
    if (!swapped) throw new Error('Pair not exist')

    // Swap from normal rate
    swapped.last = 1 / swapped.last
    swapped.pair = `${from}_${to}`
    return swapped
  }
}

export default Helper