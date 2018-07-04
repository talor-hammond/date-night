import React, { Component } from 'react'

class Recipes extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            recipes: this.props.recipes
        }
    }
    
    componentDidMount() {
        console.log(this.props)
    }
    
    render() {
        

        const {recipes} = this.state // array of recipes.

        return (
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
        )

    }

}

export default Recipes
