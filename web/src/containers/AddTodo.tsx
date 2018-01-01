import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Util from '../util'

const ADD_TODO = gql`
  mutation addTodo($text: String!, $completed: Boolean) {
    addTodo(text: $text, completed: $completed) @client {
      id
    }
  }
`

// TODO : get from props
const fromExchange = 'bx'
const toExchange = 'binance'

// TODO : load from graphql
const tradeFees = {
  bx: 0.25,
  binance: 0.1
}

const withdrawFees = {
  bx: {
    ETH: 0.005,
    OMG: 0.2
  },
  binance: {
    ETH: 0.01,
    OMG: 0.3
  }
}

const prices = {
  bx: {
    ETH_THB: 26574.999657655392881,
    OMG_THB: 569.5
  },
  binance: {
    OMG_ETH: 0.021317
  }
}

const toCurrency = value => {
  return Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const withAction = text => ({ variables: { text, completed: true } })
const withResult = text => ({ variables: { text } })

// Trade fees
const showTradeFee = ({ result }, fromExchange) => withAction(`💸 trading fee ${tradeFees[fromExchange]}%`)

const doTradeFee = (output, fromExchange) => {
  output.result *= 1 - tradeFees[fromExchange] / 100
  return withResult(`${fromExchange.toUpperCase()} ${toCurrency(output.result)} THB`)
}

// Trade
const showTrade = ({ result }, to, from, fromExchange) => withAction(`💎 1 ${to} = ${toCurrency(Util.getPrice(prices[fromExchange], to, from))} ${from}`)

const doTrade = (output, to, from, fromExchange) => {
  output.result *= Util.getPrice(prices[fromExchange], from, to)
  return withResult(`${fromExchange.toUpperCase()} ${toCurrency(output.result)} ${to}`)
}

// Withdraw fees
const showWithdrawFee = (symbol, fromExchange) => withAction(`💸 withdraw fee ${withdrawFees[fromExchange][symbol]} ${symbol}`)

const doWithdrawFee = (output, symbol, fromExchange, toExchange) => {
  output.result -= withdrawFees[fromExchange][symbol]
  return withResult(`${toExchange.toUpperCase()} ${toCurrency(output.result)} ${symbol}`)
}

// Summary
const showProfit = (mutate, result, fund, symbol) => mutate(withAction(`profit ${toCurrency(result - fund)} ${symbol}`))

const trade = (mutate, output, to, from, exchange) => {
  mutate(showTradeFee(output, exchange))
  mutate(doTradeFee(output, exchange))
  mutate(showTrade(output, to, from, exchange))
  mutate(doTrade(output, to, from, exchange))
}

const withdraw = (mutate, output, to, fromExchange, toExchange) => {
  mutate(showWithdrawFee(to, fromExchange))
  mutate(doWithdrawFee(output, to, fromExchange, toExchange))
}

const mutateRoute = (mutate, fund, fromExchange, toExchange) => {
  let output = { result: fund }

  // Trade
  let from = 'THB'
  // TODO : can choose ETH, btc
  let to = 'ETH'
  trade(mutate, output, to, from, fromExchange)

  // Withdraw
  withdraw(mutate, output, to, fromExchange, toExchange)

  // Trade
  from = 'ETH'
  // TODO : can choose other token
  to = 'OMG'
  trade(mutate, output, to, from, toExchange)

  // Withdraw
  withdraw(mutate, output, to, toExchange, fromExchange)

  // Trade
  from = 'OMG'
  // TODO : can choose other token
  to = 'THB'
  trade(mutate, output, to, from, fromExchange)

  // Summary
  showProfit(mutate, output.result, fund, to)
}

const AddTodo = ({ mutate }) => {
  const DEFAULT_FUND = '10000'
  let input

  // TODO : remove this auto trigger
  setTimeout(() => {
    mutateRoute(mutate, DEFAULT_FUND, fromExchange, toExchange)
  }, 0)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          mutateRoute(mutate, input.value, fromExchange, toExchange)
        }}
      >
        <li>
          BX <input
            type='number'
            defaultValue={DEFAULT_FUND}
            ref={node => {
              input = node
            }}
          /> THB <button type='submit'>Fund</button>
        </li>
      </form>
    </div>
  )
}

export default graphql(ADD_TODO)(AddTodo)
