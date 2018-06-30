// apiClient -- functions for requests to api:

import request from 'superagent'

// API constants:
const mashapeKey = "4MvakPXpX5mshEZQpyMAEmrVjTBCp1AkUO9jsncy4Kb9PZQYNJ"
const mashapeHost = "spoonacular-recipe-food-nutrition-v1.p.mashape.com"

// Functions ------------------------------------------------------------------------------------------------
export function getEntreeBy(food, cuisine, diet) {
  // getting array of entrees...
  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=appetizer&minCalories=700&offset=0&number=100`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost }) // setting header w object: '.header(s)'
    .end((err, res) => {
      console.log(res.body.results);
    });
}

export function getMainBy(food, cuisine, diet) {
  // getting array of mains...
  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&cuisine=${cuisine}&diet=${diet}&limitLicense=false&type=main+course&minCalories=1000&offset=0&number=100`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body.results);
    });
}

export function getDessertBy(food) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${food}&limitLicense=false&type=dessert&ranking=2&offset=0&number=100`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}

export function getWinePairingWith(food) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=${food}`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}

// Recipe information:
export function getRecipeBy(id) {

  request
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`)
    .set({ "X-Mashape-Key": mashapeKey, "X-Mashape-Host": mashapeHost })
    .end((err, res) => {
      console.log(res.body);
    });

}
