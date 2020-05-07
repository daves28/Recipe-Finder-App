const axios = require('axios')

const recipeController = {}

recipeController.getRecipes = (req, res, next) => {
  // console.log('Inside getRecipes')
  // console.log(req.body.searchParams)
  const searchFoods = req.body.searchParams
  const limit = '20'
  const apiKey = 'fc4f7bc8bd37432684adbe0ec6844a8c'
  let url
  if (searchFoods !== 'Default'){
    let urlFoods
    //Check if its an array, coming from the checklist
    if (Array.isArray(searchFoods)){
      //Coming from the checklist and theres more than one item
      if (searchFoods.length > 1){
        urlFoods = searchFoods.join(',+').toLowerCase()
        // console.log('These are the urlFoods -> ', urlFoods)
      }
      //If its coming from the check list and theres only one item
      else urlFoods = searchFoods[0].toLowerCase()
    }
    //If its a string coming from the search bar
    else urlFoods = searchFoods.split(' ').join(',+').toLowerCase()

    // url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${urlFoods}&addRecipeInformation=true&number=${limit}`
    url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${urlFoods}&number=${limit}`
  }
  //Should hit on first load, default search
  else {
    url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&addRecipeInformation=true&number=${limit}`
  }

  // console.log(url)
  axios.get(url)
    .then((data)=> {
      // console.log('Data received from Spoonacular -> ', data.data.results)
      res.locals.recipes = data.data.results
      return next()
    })
    .catch(err => console.log('Error fetching data from Spoonacular Api: ', err))
}
  

module.exports = recipeController