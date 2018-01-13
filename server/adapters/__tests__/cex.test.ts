/* eslint-env jest */
describe('adapter-cex', () => {
  const data = require('../__mocks__/cex.price.json')

  it('can parse price from cex', async () => {
    const exchange = 'cex'
    const from = 'ETH'
    const to = 'USD'

    const { parse } = require(`../${exchange}`)
    const json = parse(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: 1440
    })
  })
})
