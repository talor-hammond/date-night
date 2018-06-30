import React from 'react'

// Components:
import Home from './Home'

// Imports from apiCLient.js:
import api from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)

    // setting state on primary render...

  }

  componentDidMount () {
    // setting state on secondary render...

  }

  render () {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    )
  }
}

export default App

