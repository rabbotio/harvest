/* eslint-env jest */
describe('binance', () => {
  const data = require('../__mocks__/binance.price.json')

  it('can parser price from binance', async () => {
    const from = 'XMR'
    const to = 'ETH'

    const { parse } = require('../binance')
    const json = parse(data)
    expect(json).toMatchObject({
      exchange: 'binance',
      pair: `${from}_${to}`,
      last: 0.46301
    })
  })
})
