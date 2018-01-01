import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Guide from './Guide';
import Fund from './components/Fund';

// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Font
import 'typeface-roboto'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Styles
const styles = {
  container: {
    textAlign: 'center'
  }
}

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

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const onFundChanged = fund => {
  console.log(fund)
}

const withService = graphql<Response>(_QUERY)
export default withService(({ data }) => {
  if (data && data.loading) { return <p>loading...</p> }

  // Do something with your data
  return (<MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.container}>
      <Fund onFundChanged={onFundChanged} />
      <Guide />
      <pre>{JSON.stringify(data)}</pre>
    </div>
  </MuiThemeProvider>)
})
