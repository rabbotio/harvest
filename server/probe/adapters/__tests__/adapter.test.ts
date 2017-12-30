/* eslint-env jest */
describe('adapter', () => {
  it('can get swapped pair symbol', async () => {
    const { getRate } = require('../adapter')
    const data = require('../__mocks__/binance.price.json')
    const exchange = 'binance'
    const from = 'XMR'
    const to = 'ETH'

    const { parse } = require(`../${exchange}`)
    const pair = parse(data)
    let rate = getRate(pair, from, to)

    expect(rate).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: 0.46301
    })

    // Swap
    rate = getRate(pair, to, from)
    expect(rate).toMatchObject({
      exchange,
      pair: `${to}_${from}`,
      last: 1 / 0.46301
    })
  })
})
