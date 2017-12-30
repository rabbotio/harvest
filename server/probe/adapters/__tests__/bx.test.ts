/* eslint-env jest */

describe('bx', () => {
  const data = require('../__mocks__/bx.price.json')

  it('can parser price from bx', async () => {
    const from = 'OMG'
    const to = 'THB'

    const { parse } = require('../bx')
    const json = parse(data)
    expect(json[`${from}_${to}`]).toMatchObject({
      exchange: 'bx',
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
