import React from 'react'

// Components:
import Home from './Home'
import Results from './Results'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      results: {},
      submitted: false
    }

    this.updateState = this.updateState.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  updateState(state) {
    this.state.submitted = true
    this.setState(state)
    console.log(this.state.results)
  }

  goBack() {
    this.state.submitted = false
  }

  render() {
    return (
        <React.Fragment>

          {!this.state.submitted && <Home updateState={this.updateState} />}
          {this.state.submitted && <Results {...this.state.results} goBack={this.goBack} />}

        </React.Fragment>
    )
  }
}

export default App

