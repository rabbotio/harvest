import * as React from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  customWidth: {
    width: 150,
  },
}

const ExchangeList = ({ exchanges, label, selectedIndex, handleChange }) => {
  const { names } = exchanges
  return (
    <SelectField
      floatingLabelText={label}
      value={names[selectedIndex]}
      onChange={handleChange}
      style={styles.customWidth}
    >
      {names.map((name, index) => <MenuItem key={index} value={name} primaryText={name} />)}
    </SelectField>
  )
}

export default ExchangeList
