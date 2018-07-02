// apiClient -- functions for requests to api:

import request from 'superagent'

// API constants:
const mashapeKey = "4MvakPXpX5mshEZQpyMAEmrVjTBCp1AkUO9jsncy4Kb9PZQYNJ"
const mashapeHost = "spoonacular-recipe-food-nutrition-v1.p.mashape.com"

// Functions ------------------------------------------------------------------------------------------------
function getEntreeBy(cuisine, diet) {
  // getting array of entrees...

  if (diet) {
    return request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=appetizer&minCalories=500&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .then((res) => {
        let entrees = (res.body.results)
        let entree = entrees[Math.floor(Math.random() * entrees.length)]

        // assigning the title and id of the entree to an object which we can return for reference:
        let entreeResults = {
          title: entree.title,
          id: entree.id
        }

        return entreeResults // returning; setting up for use with .then
      })
  } else {
    return request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?cuisine=${cuisine}&limitLicense=false&type=appetizer&minCalories=500&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .then((res) => {
        let entrees = (res.body.results)

        let entree = entrees[Math.floor(Math.random() * entrees.length)]

        // assigning the title and id of the entree to an object which we can return for reference:
        let entreeResults = {
          title: entree.title,
          id: entree.id
        }

        return entreeResults // returning; setting up for use with .then
      })
  }
}

function getMainBy(food, cuisine, diet) {
  // if a diet was specified:
  if (diet) {
    return request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=main+course&minCalories=700&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .then((res) => {

        console.log('Request is working...')

        let mains = res.body.results

        // getting main at a random index between 0 and 99:
        let main = mains[Math.floor(Math.random() * mains.length)]

        // assigning the title and id of the main to an object which we can return for reference:
        let mainResults = {
          title: main.title,
          id: main.id
        }

        return mainResults // returning; setting up for use with .then
      });

  } else {
    return request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&limitLicense=false&type=main+course&minCalories=700&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .then((res) => {
        let mains = res.body.results

        // getting main at a random index between 0 and 99:
        let main = mains[Math.floor(Math.random() * mains.length)]

        // assigning the title and id of the main to an object which we can return for reference:
        let mainResults = {
          title: main.title,
          id: main.id
        }

        return mainResults // returning; setting up for use with .then
      });
  }
}

function getDessert() {

  return request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?limitLicense=false&type=dessert&ranking=2&offset=0&number=100`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .then((res) => {
      let desserts = res.body.results

      let dessert = desserts[Math.floor(Math.random() * results.length)]

      let dessertResults = {
        title: dessert.title,
        id: dessert.id
      }

      return dessertResults
    });

}

function getWinePairingWith(food) {

  return request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${food}`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .then((res) => {
      let wines = res.body.pairedWines

      let wine = wines[Math.floor(Math.random() * wines.length)]

      return wine
    });

}

// Recipe information:
function getRecipeBy(id) {

    return request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
      .then((res) => {
        const results = res.body

        const ingredientResults = results.extendedIngredients // grabbing our ingredientResults from results
        let ingredients = [] // prefacing our ingredients array

        ingredientResults.map(ingredient => { // for each ingredient in ingredientResults, grab the name prop...
          ingredients.push(ingredient.name)
        })

        const instructions = results.instructions // defining our recipe instructions...

        const recipe = {
          title: results.title,
          ingredients,
          instructions
        }

        return recipe
      })

}

export default {
  getEntreeBy,
  getMainBy,
  getDessert,
  getWinePairingWith,
  getRecipeBy
}
