import React, { Component } from 'react'

import api from '../apiClient'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menu: {},
            recipes: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.changeWinePairingBool = this.changeWinePairingBool.bind(this)
        this.submitButton = this.submitButton.bind(this)
        this.getResults = this.getResults.bind(this)
    }

    componentDidMount() {
        api.getWinePairingWith('steak')
    }

    handleChange(e) {
        const inputs = this.state
        inputs[e.target.name] = e.target.value
    }

    changeWinePairingBool() {
        this.state.winePairing = !this.state.winePairing
    }

    submitButton(e) {
        e.preventDefault()

        console.log(this.state)

        this.getResults(this.state.nameOne, this.state.nameTwo, this.state.food, this.state.cuisine, this.state.diet, this.state.winePairing, this.state.email)
        // NOTE: can't I pass the object this.state???????
    }

    getResults(nameOne, nameTwo, food, cuisine, diet) {
        // TODO: params -> object????

        this.state.menu = {
            nameOne,
            nameTwo,
        }

        // TODO: promise.all on these three
        Promise.all([api.getEntreeBy(cuisine, diet), api.getMainBy(food, cuisine, diet), api.getDessert()])
            .then(returns => {
                // assigning each object in returns array to an object
                const [entree, main, dessert] = returns

                // building menu in state...
                this.state.menu.entree = entree.title
                this.state.menu.main = main.title
                this.state.menu.dessert = dessert.title

                // setting a recipeIds array...
                let recipeIds = []

                // pushing ids to the recipeIds array...
                returns.map(item => {
                    recipeIds.push(item.id)
                })

                return recipeIds
            })
            .then(recipeIds => { // w the recipeIds that are returned prev...
                recipeIds.map((id) => { // NOTE: tell this to wait for all the Ids to be pushed
                    api.getRecipeBy(id)
                        .then(recipe => {
                            this.state.recipes.push(recipe) // pushing each recipe object into our recipes array
                        })
                })
                return this.state
            })
            .then((state) => {
                this.props.updateState(state)
            })


    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <h3 className="fancy">Build a menu for...</h3>

                    <form>

                        <div className="form-row">
                            <div className="col-md-6">
                                <input type="text" name="nameOne" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>

                            <div className="col-md-6">
                                <input type="text" name="nameTwo" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <br />

                        <div className="form-group">
                            <label>What cuisine?</label>
                            <input type="text" name="cuisine" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Italian, thai, chinese, etc.</small>
                            <br />
                            <label>Any particular food?</label>
                            <input type="text" name="food" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Pasta, curry, mulch, etc.</small>
                        </div>

                        <div className="has-content-centered">
                            <button className="submit" type="submit" onClick={(e) => this.submitButton(e)} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default Form