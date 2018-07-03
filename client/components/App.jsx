import React, { Component } from 'react'

// Components:
import Home from './Home'
import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: {
        menu: {
          entree: "Broad Bean, Pea And Goat Cheese Bruschetta",
          main: "Chicken Cordon Bleu Pasta",
          dessert: "Vegan Cranberry Pistachio Biscotti",
          winePairing: 'Sauvignon blanc',
          nameOne: 'tay',
          nameTwo: 'ct'
        },
        recipes: [
          {
            ingredients: ['alfredo sauce', "chicken strips", "deli ham", "pasta", "swiss cheese"],
            instructions: "Bake the frozen chicken you chose according to the package directions on the back.Boil the noodles according to the package directions for the type you chose. When cooked, drain out all the water.When the chicken is cooked, slice into smaller pieces.Add the chicken to the noodles. Pour the jar of alfredo sauce over the chicken and noodles. Stir to mix it all up. Add the ham to the mixture. Make sure you break up the pieces of ham from each other, they like to stick together.Add the shredded cheese, mix together.Serve piping hot.",
            title: "Chicken Cordon Bleu Pasta"
          },
          {
            ingredients: ['alfredo sauce', "chicken strips", "deli ham", "pasta", "swiss cheese"],
            instructions: "Bake the frozen chicken you chose according to the package directions on the back.Boil the noodles according to the package directions for the type you chose. When cooked, drain out all the water.When the chicken is cooked, slice into smaller pieces.Add the chicken to the noodles. Pour the jar of alfredo sauce over the chicken and noodles. Stir to mix it all up. Add the ham to the mixture. Make sure you break up the pieces of ham from each other, they like to stick together.Add the shredded cheese, mix together.Serve piping hot.",
            title: "Chicken Cordon Bleu Pasta"
          }
        ]
      },
      submitted: true
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
    const { submitted, results } = this.state
    
    return (
      <React.Fragment>

        {!submitted
          ? <Home updateState={this.updateState.bind(this)} />
          : <Results {...results} />
        }

      </React.Fragment>
    )
  }
}

export default App

