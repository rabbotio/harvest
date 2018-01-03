import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Link from '../components/Link'

const VISIBILITY_QUERY = gql`
  {
    visibilityFilter @client
  }
`
declare global {
  interface withActiveStatePropTypes {
    active: boolean
  }
}

const withActiveState = graphql<{}, { filter: any }, withActiveStatePropTypes>(VISIBILITY_QUERY, {
  props: ({ ownProps, data }) => ({
    active: data && ownProps['filter'] === data['visibilityFilter']
  })
})

const VISIBILITY_MUTATION = gql`
  mutation SetFilter($filter: String!) {
    visibilityFilter(filter: $filter) @client
  }
`

const setVisibilityFilter = graphql<{ s: any }, { filter: any }>(VISIBILITY_MUTATION, {
  props: ({ mutate, ownProps }) => ({
    onClick: () => mutate && mutate({ variables: { filter: ownProps['filter'] } })
  })
})

const FilterLink = setVisibilityFilter(withActiveState(Link))

export default FilterLink
