import React, { Component } from 'react'

import Nav from './Nav'

class Results extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { menu, recipes } = this.props
        const { entree, main, dessert, wine } = menu

        return (
            <React.Fragment>
                <Nav />
                <div className="container menu">

                    <h1 className="menuTitle">Your menu</h1>
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

                </div>

                <div className="recipesContainer">

                    <h1 className="menuTitle">Recipes</h1>
                    <hr />

                    {recipes.map((recipe, i) => {
                        return (
                            <React.Fragment key={i}>

                                <div className="row">
                                    <div className="col">
                                        <h4 className="fancy">{recipe.title}</h4>
                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-3">
                                        <h5 className="fancy">Ingredients:</h5>
                                        <ul>
                                            {recipe.ingredients.map((ingredient, i) => {
                                                return <li key={i} className="text-capitalize">{ingredient}</li>
                                            })}
                                        </ul>
                                    </div>

                                    <div className="col-9">
                                        <h5 className="fancy">Instructions:</h5>
                                        <p>{recipe.instructions}</p>
                                    </div>
                                </div>

                                <br/><br/>

                            </React.Fragment>
                        )
                    })}
                </div>

            </React.Fragment>
        )
    }

}

export default Results