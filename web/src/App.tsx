import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Guide from './Guide';

const _QUERY = gql`
{
  prices {
    last
    pair
    exchange
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
