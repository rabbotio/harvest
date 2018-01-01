/* eslint-env jest */
import Model from '../'

describe('Model', () => {
  it('can get price from bx', async () => {
    const exchange = 'bx'
    const from = 'OMG'
    const to = 'THB'

    const json = await Model.getPrice(exchange, from, to)
    expect(json).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: expect.any(Number)
    })
  })

  it('can get price from binance', async () => {
    const exchange = 'binance'
    const from = 'XRP'
    const to = 'ETH'

    const json = await Model.getPrice(exchange, from, to)
    expect(json).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: expect.any(Number)
    })
  })
})
