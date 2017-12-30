/* eslint-env jest */
describe('probe', () => {

  const Probe = require('../index')
  const probe = new Probe()

  it('can get price from bx', async () => {
    const exchange = 'bx'
    const from = 'OMG'
    const to = 'THB'

    const json = await probe.getPrice(exchange, from, to)
    expect(json).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: expect.any(Number)
    })
  })

  it('can get price from binance', async () => {
    const exchange = 'binance'
    const from = 'XMR'
    const to = 'ETH'

    const json = await probe.getPrice(exchange, from, to)
    expect(json).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: expect.any(Number)
    })
  })
})
