// React +
import React, { Component } from 'react'

// Components
import Nav from './Nav'
import Recipes from './Recipes'

class Results extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipePicked: false,
            recipes: this.props.recipes, // an array in itself; feed it through props to Recipes.jsx
            buttonText: 'Show recipes'
        }

        this.goToRecipes = this.goToRecipes.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
    }

    goToRecipes() {
        if (!this.state.recipePicked) {
            this.state.buttonText = 'Hide recipes'
        } else {
            this.state.buttonText = 'Show recipes'
        }

        this.setState({
            recipePicked: !this.state.recipePicked // setting recipePicked to opposite of it in state; and re-rendering
        })
        console.log(this.state.recipePicked)
    }

    render() {
        let button = this.state.buttonText

        const { menu } = this.props
        const { entree, main, dessert, wine } = menu

        return (
            <React.Fragment>
                <Nav />
                <div className="container menu">

                    <h1 className="menuTitle">{menu.nameOne} & {menu.nameTwo}'s menueeeeee</h1>
                    <hr />
                    <ul>
                        <li>
                            <h3 className="menuTitle">Entreé</h3>
                            <p><small>{entree}</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Main</h3>
                            <p><small>{main}</small></p>
                        </li>
                        <li>
                            <h3 className="menuTitle">Dessert</h3>
                            <p><small>{dessert}</small></p>
                        </li>
                        {wine && (
                            <li>
                                <h3 className="menuTitle">Wine pairing</h3>
                                <p><small>{wine}</small></p>
                            </li>
                        )}
                    </ul>

                    <button onClick={() => this.goToRecipes()}>{button}</button>

                </div>
                {
                    this.state.recipePicked &&
                    <Recipes recipes={this.state.recipes} />
                }



            </React.Fragment>
        )
    }

}

export default Results