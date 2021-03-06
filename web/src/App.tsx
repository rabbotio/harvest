import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Guide from './components/Guide'
import Footer from './components/Footer'

// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Font
import 'typeface-roboto'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const _QUERY = gql`
{
  exchanges {
    names
  }
}
`

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const withService = graphql<Response>(_QUERY)
export default withService(({ data }) => {
  if (!data) { return <p>init...</p> }
  if (data.loading) { return <p>loading...</p> }

  // Do something with your data
  return (<MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Footer />
      <Guide exchanges={data['exchanges']} />
      <pre>{JSON.stringify(data)}</pre>
    </div>
  </MuiThemeProvider>)
})
