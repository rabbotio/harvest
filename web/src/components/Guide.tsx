import * as React from 'react'

import SelectExchange from '../containers/SelectExchange'
import ClearTodo from '../containers/ClearTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const iconStyles = {
  padding: '8px',
};
interface GuidePropTypes extends WithExchangeStatePropTypes, GuideWithGraphQLPropTypes {

}
const Guide = ({ exchanges, handleChange, fromExchange, toExchange }: GuidePropTypes): any => (
  <div>
    <SelectExchange
      label="From"
      exchanges={exchanges}
      selectedIndex={0}
      handleChange={handleChange}
    /> <span style={iconStyles} > <ActionFlightTakeoff /> </span><SelectExchange
      label="To"
      exchanges={exchanges}
      selectedIndex={1}
      handleChange={handleChange}
    />
    <hr />
    <ClearTodo />
    <ul>
      <AddTodo fromExchange={fromExchange} toExchange={toExchange} />
      <VisibleTodoList />
    </ul>
  </div>
)

interface WithExchangeStatePropTypes {
  handleChange?: (event, index, value) => void
  fromExchange: string
  toExchange: string
}

interface GuideWithGraphQLPropTypes {
  exchanges: string[]
}
export default compose<{}, GuideWithGraphQLPropTypes, GuidePropTypes>(
  graphql(gql`
    mutation ($value: JSON) {
      exchangeState(value: $value) @client
    }
  `, {
      props: ({ mutate }) => {
        return {
          handleChange: async (event, index, value) => {

            console.log('handleChange:', value)
            if (mutate) {
              await mutate({
                variables: {
                  value,
                }
              })
            }
          }
        }
      }
    }),
  graphql<{ exchangeState: WithExchangeStatePropTypes }, {}>(gql`
    query {
      exchangeState @client
    }
  `, {
      props: ({ data }) => {

        if (!data) {
          return {
            fromExchange: 'bx',
            toExchange: 'binance'
          }
        }

        return ({
          ...data.exchangeState
        })
      }
    })
)(Guide)
