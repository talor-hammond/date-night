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
            diet: '',
            email: '',
            menu: {},
            recipes: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.changeWinePairingBool = this.changeWinePairingBool.bind(this)
        this.submitButton = this.submitButton.bind(this)
        this.getResults = this.getResults.bind(this)
    }

    // componentDidMount() {

    // }

    handleChange(e) {
        const inputs = this.state
        inputs[e.target.name] = e.target.value
    }

    changeWinePairingBool() {
        this.state.winePairing = !this.state.winePairing
    }

    submitButton(e) {
        e.preventDefault()

        this.getResults(this.state.nameOne, this.state.nameTwo, this.state.food, this.state.cuisine, this.state.diet, this.state.winePairing, this.state.email)
        // NOTE: can't I pass the object this.state???????
    }

    getResults(nameOne, nameTwo, food, cuisine, diet, email) {
        // TODO: params -> object????

        let menu = { // re-assign as each api method returns what u want
            nameOne,
            nameTwo,
            email
        }

        let recipeIds = []

        api.getEntreeBy(cuisine, diet)
            .then(entree => {
                menu.entree = entree.title
                recipeIds.push(entree.id)

                console.log(menu, recipeIds)
            })

        api.getMainBy(food, cuisine, diet)
            .then(main => {
                menu.main = main.title
                recipeIds.push(menu.id)

                console.log(menu, recipeIds)
            })

        api.getDessert()
            .then(dessert => {
                menu.dessert = dessert.title
                recipeIds.push(dessert.id)
                console.log(menu, recipeIds)
            })

        api.getWinePairingWith(food)
            .then(wine => {
                menu.wine = wine
                console.log(menu)
            })

        // mapping through the ids, and performing a request and returning the recipe object for each one:
        recipesIds.map(id => {
            api.getRecipesBy(id)
                .then(recipe => {
                    this.state.recipes.push(recipe) // pushing each recipe object into our recipes array
                    console.log(this.state.recipes)
                })
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form>

                        <h1>Who's going?</h1>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="nameOne" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>
                            <small className="form-text text-muted">&</small>
                            <div className="col">
                                <input type="text" name="nameTwo" className="form-control" onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>

                        <div className="form-group">
                            <h1>What do you feel like?</h1>
                            <label>Food:</label>
                            <input type="text" name="food" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Pasta, curry, mulch, etc.</small>
                            <br />
                            <label>Cuisine:</label>
                            <input type="text" name="cuisine" className="form-control" onChange={(e) => this.handleChange(e)} />
                            <small className="form-text text-muted">Italian, thai, chinese, etc.</small>
                        </div>

                        <div className="form-group">
                            <label>An email address to send the menu & recipes to:</label>
                            <input type="email" className="form-control" onChange={(e) => this.handleChange(e)} name="email" />
                        </div>

                        <button type="submit" onClick={(e) => this.submitButton(e)} className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default Form