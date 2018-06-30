import React from 'react'

import api from '../apiClient'

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nameOne: '',
            nameTwo: '',
            food: '',
            cuisine: '',
            winePairing: false,
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.changeWinePairingBool = this.changeWinePairingBool.bind(this)
    }


    handleChange(e) {
        console.log(e.target.value)

        const inputs = this.state
        inputs[e.target.name] = e.target.value
    }

    changeWinePairingBool() {
        this.state.winePairing = !this.state.winePairing
    }

    getResults(nameOne, nameTwo, food, cuisine, winePairing, email) {

    }

    render() {
        return (
            <React.Fragment>
                <form>

                    <div className="form-group">
                        <h1>Who's going?</h1>
                        <input type="text" name="nameOne" className="form-control" onChange={(e) => this.handleChange(e)} />
                        <input type="text" name="nameTwo" className="form-control" onChange={(e) => this.handleChange(e)} />
                        <small className="form-text text-muted">Testing, testing</small>
                    </div>

                    <div className="form-group">
                        <h1>What do you feel like?</h1>
                        <label>Food:</label>
                        <input type="text" name="food" className="form-control" onChange={(e) => this.handleChange(e)} />
                        <small className="form-text text-muted">Pasta, curry, mulch, etc.</small>
                        <br/>
                        <label>Cuisine:</label>
                        <input type="text" name="cuisine" className="form-control" onChange={(e) => this.handleChange(e)} />
                        <small className="form-text text-muted">Italian, thai, chinese, etc.</small>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" onClick={() => this.changeWinePairingBool()} data-size="normal" data-toggle="toggle" name="winePairing" />
                        <label>Wine pairing?</label>
                    </div>

                    <div className="form-group">
                        <label>An email address to send the menu & recipes to:</label>
                        <input type="text" className="form-control" onChange={(e) => this.handleChange(e)} name="email" />
                    </div>

                    <button type="submit" onClick={() => this.getResults(this.state)} class="btn btn-primary">Submit</button>

                </form>
            </React.Fragment>
        )
    }

}

export default Form