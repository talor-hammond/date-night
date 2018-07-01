import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components:
import Home from './Home'
import Nav from './Nav'
import Form from './Form'

// Imports from apiCLient.js:
import api from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
      nameOne: '',
      nameTwo: '',
      food: '',
      cuisine: '',
      winePairing: false,
      email: ''
    }

    // this.updateState = this.updateState.bind(this)
  }

  // updateState(state) {
  //   this.state.submitted = true
  //   this.setState(state)
  // }

  componentDidMount() {
    api.getEntreeBy('italian')
  }

  render() {
    return (
      <Router>
        <React.Fragment>

          <Route path='/' component={Nav} />
          <Route exact path='/' component={Home} />

          <Route path='/create' component={Form} />

        </React.Fragment>
      </Router>
    )
  }
}

export default App

