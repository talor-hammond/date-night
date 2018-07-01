// apiClient -- functions for requests to api:

import request from 'superagent'

// API constants:
const mashapeKey = "4MvakPXpX5mshEZQpyMAEmrVjTBCp1AkUO9jsncy4Kb9PZQYNJ"
const mashapeHost = "spoonacular-recipe-food-nutrition-v1.p.mashape.com"

// Functions ------------------------------------------------------------------------------------------------
function getEntreeBy(cuisine, diet) {
  // getting array of entrees...

  if (diet) {
    request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=appetizer&minCalories=500&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .end((err, res) => {
        let results = (res.body.results)
        let entree = results[Math.floor(Math.random() * results.length)]

        // assigning the title and id of the entree to an object which we can return for reference:
        let entreeResults = {
          title: entree.title,
          id: entree.id
        }

        return entreeResults // returning; setting up for use with .then
      })
  } else {
    request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?cuisine=${cuisine}&limitLicense=false&type=appetizer&minCalories=500&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .end((err, res) => {
        let results = (res.body.results)
        let entree = results[Math.floor(Math.random() * results.length)]

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
  // getting array of mains...

  // if a diet was specified:
  if (diet) {
    request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=main+course&minCalories=700&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .end((err, res) => {

        let results = res.body.results

        // getting main at a random index between 0 and 99:
        let main = results[Math.floor(Math.random() * results.length)]

        // assigning the title and id of the main to an object which we can return for reference:
        let mainResults = {
          title: main.title,
          id: main.id
        }

        return mainResults // returning; setting up for use with .then
      });
      
  } else {
    request
      .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&limitLicense=false&type=main+course&minCalories=700&offset=0&number=100`)
      .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
      .end((err, res) => {
        let results = res.body.results

        // getting main at a random index between 0 and 99:
        let main = results[Math.floor(Math.random() * results.length)]

        // assigning the title and id of the main to an object which we can return for reference:
        let mainResults = {
          title: main.title,
          id: main.id
        }

        return mainResults // returning; setting up for use with .then
      });
  }
}

function getDessertBy(food) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&limitLicense=false&type=dessert&ranking=2&offset=0&number=100`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}

function getWinePairingWith(food) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${food}`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}

// Recipe information:
function getRecipeBy(id) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}

module.exports = {
  getEntreeBy,
  getMainBy,
  getDessertBy,
  getWinePairingWith,
  getRecipeBy
}
