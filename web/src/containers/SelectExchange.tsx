import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ExchangeList from '../components/ExchangeList'

const SELECT_EXCHANGE_MUTATION = gql`
  mutation SelectExchange($name: String!) {
    selectExchange(name: $name) @client
  }
`

const selectExchange = graphql<{}, { exchanges: any, label: string, selectedIndex: any, handleChange: any }>(SELECT_EXCHANGE_MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onSelect: name => mutate && mutate({ variables: { name } })
  })
})

const SelectExchange = selectExchange(ExchangeList)

export default SelectExchange
