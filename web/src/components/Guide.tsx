import * as React from 'react'

import SelectExchange from '../containers/SelectExchange'
import ClearTodo from '../containers/ClearTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const iconStyles = {
  padding: '8px',
};

const handleChange = (event, index, value) => {
  console.log(value)
}

const Guide = ({ exchanges }): any => (
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
      <AddTodo />
      <VisibleTodoList />
    </ul>
  </div>
)
export default Guide
