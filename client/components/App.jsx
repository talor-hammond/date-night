import React from 'react'

// Imports from apiCLient.js:
import {getMainCourseBy} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    getMainCourseBy()
  }

  render () {
    return (
      <div>
        <h1>Lol</h1>
      </div>
    )
  }
}

export default App

