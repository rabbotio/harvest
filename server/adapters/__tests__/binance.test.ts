/* eslint-env jest */
describe('adapter-binance', () => {
  const data = require('../__mocks__/binance.price.json')

  it('can parse price from binance', async () => {
    const exchange = 'binance'
    const from = 'XRP'
    const to = 'ETH'

    const { parse } = require(`../${exchange}`)
    const json = parse(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: 0.0025001
    })
  })
})
