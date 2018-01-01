import * as React from 'react'
import './Guide.css'

type GuideProps = {
}

type GuideState = {
  USD_THB: number,
  fund: number,
  from: string,
  to: string,
  fromExchange: string,
  toExchange: string,
  prices: any,
  tradeFees: any,
  withdrawFees: any,
};

class Guide extends React.Component<GuideProps, GuideState> {
  constructor(props) {
    super(props)

    const tradeFees = {
      bx: 0.25,
      binance: 0.1
    }

    // TODO : define const and recheck at page https://support.binance.com/hc/en-us/articles/115000429332
    const withdrawFees = {
      bx: {
        eth: 0.005,
        omg: 0.2
      },
      binance: {
        eth: 0.01,
        omg: 0.3
      }
    }

    // TODO : fetch from https://github.com/donbobvanbirt/coin-ticker
    const prices = [
      {
        last: 26574.999657655392881,
        pair: 'eth_thb',
        exchange: 'bx'
      },
      {
        last: 1 / 26574.999657655392881,
        pair: 'thb_eth',
        exchange: 'bx'
      },
      {
        last: 569.5, // 587.766,
        pair: 'omg_thb',
        exchange: 'bx'
      },
      {
        last: 0.021317,
        pair: 'omg_eth',
        exchange: 'binance'
      },
      {
        last: 1 / 0.021317,
        pair: 'eth_omg',
        exchange: 'binance'
      }
    ]

    this.state = {
      USD_THB: 32.8,
      fund: 10000,
      from: 'eth',
      to: 'omg',
      fromExchange: 'bx',
      toExchange: 'binance',
      prices,
      tradeFees,
      withdrawFees
    } as GuideState
  }

  currency(value) {
    return Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  getPrice(exchange, pair) {
    return this.state.prices.find(element => element.exchange === exchange && element.pair === pair)
  }

  render() {
    const { fund, tradeFees, withdrawFees, from, to, fromExchange, toExchange } = this.state
    let output = { result: fund }

    const trade = (output, exchange, pair) => (output.result *= this.getPrice(exchange, pair).last)
    const fee = (output, exchange) => (output.result *= 1 - tradeFees[exchange] / 100)
    const withdraw = (output, exchange, symbol) => (output.result -= withdrawFees[exchange][symbol])

    return (
      <div className='Guide'>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(output.result)} THB`}</div>
        <div>|</div>
        <small>{`trading fee -${tradeFees['bx']}%`}</small>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(fee(output, 'bx'))} THB`}</div>
        <div>|</div>
        <small>{`1 ETH = ${this.currency(this.getPrice(fromExchange, 'eth_thb').last)} THB`}</small>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(trade(output, fromExchange, 'thb_eth'))} ${from.toUpperCase()}`}</div>
        <div>|</div>
        <small>{`withdraw fee -${withdrawFees[fromExchange]['eth']} ETH`}</small>
        <div>|</div>
        <div>{`${toExchange.toUpperCase()} ${this.currency(withdraw(output, fromExchange, 'eth'))} ${from.toUpperCase()}`}</div>
        <div>|</div>
        <small>{`1 ETH = ${this.currency(this.getPrice('binance', `${to}_eth`).last)} OMG`}</small>
        <div>|</div>
        <div>{`${toExchange.toUpperCase()} ${this.currency(trade(output, 'binance', `eth_${to}`))} OMG`}</div>
        <div>|</div>
        <small>{`trading fee -${tradeFees['binance']}%`}</small>
        <div>|</div>
        <div>{`${toExchange.toUpperCase()} ${this.currency(fee(output, 'binance'))} OMG`}</div>
        <div>|</div>
        <small>{`withdraw fee -${withdrawFees['binance'][to]} OMG`}</small>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(withdraw(output, 'binance', to))} OMG`}</div>
        <div>|</div>
        <small>{`1 OMG = ${this.currency(this.getPrice(fromExchange, `${to}_thb`).last)} THB`}</small>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(trade(output, fromExchange, `${to}_thb`))} THB`}</div>
        <div>|</div>
        <small>{`trading fee -${tradeFees['bx']}%`}</small>
        <div>|</div>
        <div>{`${fromExchange.toUpperCase()} ${this.currency(fee(output, 'bx'))} THB`}</div>
        <div>|</div>
        <small>{`Profit ${this.currency(output.result - fund)} THB`}</small>
      </div>
    )
  }
}

export default Guide
