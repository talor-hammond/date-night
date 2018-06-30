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
    }


    handleChange(e) {

        const inputs = this.state
        inputs[e.target.name] = e.target.value

    }

    render() {
        return (
            <form>
                <label>Who's going?</label>
                <input type="text" onChange={(e) => this.handleChange(e)} name="nameOne" />
                <input type="text" onChange={(e) => this.handleChange(e)} name="nameTwo" />

                <label>What do you feel like?</label>
                <input type="text" onChange={(e) => this.handleChange(e)} name="food" placeholder="Pasta, steak, curry, etc." />
                <input type="text" onChange={(e) => this.handleChange(e)} name="cuisine" placeholder="Italian, thai, chinese, etc." />

                <label>Wine pairing?</label>
                <input type="text" onChange={(e) => this.handleChange(e)} name="winePairing" />

                <label>An email address to send the menu + recipes to:</label>
                <input type="text" onChange={(e) => this.handleChange(e)} name="email" />

                <input type="submit" />
            </form>
        )
    }

}

export default Form