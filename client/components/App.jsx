import React, {Component} from 'react'

// Components:
import Home from './Home'
import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: {},
      submitted: false
    }

    this.goBack = this.goBack.bind(this)
  }

  updateState(results) {
    // setting this.state.results and re-rendering...
    this.setState({
      results,
      submitted: true
    })
  }

  goBack() {
    this.setState({
      submitted: false
    })
  }

  render() {
    const {submitted, updateState, results} = this.state
    return (
        <React.Fragment>

          {!submitted 
            ? <Home updateState={this.updateState.bind(this)} />
            : <Results {...results}/>
          }

        </React.Fragment>
    )
  }
}

export default App

