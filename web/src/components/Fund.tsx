import * as React from 'react'
import './Fund.css'

const Fund = ({ onFundChanged }) => {
  const onFundChange = (e): any => {
    e.preventDefault()
    let fund = e.target.value
    onFundChanged(fund)
  }

  return (
    <div>
      BX <input placeholder='fund' name='fund' type='number' defaultValue='10000' onChange={onFundChange} /> THB
    </div>
  )
}

export default Fund
