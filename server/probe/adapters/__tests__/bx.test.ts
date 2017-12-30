/* eslint-env jest */
describe('adapter-bx', () => {
  const data = require('../__mocks__/bx.price.json')

  it('can parse price from bx', async () => {
    const exchange = 'bx'
    const from = 'OMG'
    const to = 'THB'

    const { parse } = require(`../${exchange}`)
    const json = parse(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      exchange,
      pair: `${from}_${to}`,
      last: expect.any(Number),
      change: expect.any(Number),
      volume: expect.any(Number),
      bid_total: expect.any(Number),
      bid_volume: expect.any(Number),
      bid_highest: expect.any(Number),
      ask_total: expect.any(Number),
      ask_volume: expect.any(Number),
      ask_highest: expect.any(Number)
    })
  })
})
