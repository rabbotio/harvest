import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './Fund.css'

const Fund = ({ forget }: any) => {
  const onFundChange = (e): any => {
    e.preventDefault()
    let fund = e.target.value

    console.log(fund)
  }

  return (
    <div>
      BX<input placeholder='fund' name='fund' type='number' defaultValue='10000' onChange={onFundChange} />THB
    </div>
  )
}

const forget = gql`
mutation forget($fund: String!) {
  forget(fund: $fund) {
    status
  }
}
`

export default graphql(forget, {
  props: ({ mutate }) => ({
    forget: fund => console.log(fund)
  })
})(Fund)
