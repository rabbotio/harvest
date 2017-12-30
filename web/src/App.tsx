import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Guide from './Guide';

const _QUERY = gql`
{
  prices(exchange:"bx", from:"eth", to:"thb") {
    exchange
    pair
    last
    change
    volume
    bid_total
    bid_volume
    bid_highest
    ask_total
    ask_volume
    ask_highest
  }
}
`

const withService = graphql<Response>(_QUERY)
export default withService(({ data }) => {
  if (data && data.loading) { return <p>loading...</p> }

  // Do something with your data
  return <div>
    <Guide />
    <pre>{JSON.stringify(data)}</pre>
  </div>
})
