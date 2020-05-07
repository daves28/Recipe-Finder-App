import React, { Component } from 'react'
import Recipe from './Recipe.js'

class RecipeList extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  // Update search query when typing into search box
  onChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    }) 
  }
  // Run the search recipe function defined in App.js
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchRecipes(this.state.search);
    this.setState({search: ''});
  }
  // Checking state update
  componentDidUpdate() {
    console.log('This is the new search bar state in RecipeList.js -> ', this.state.search);
  }

  render() {
    const recipeArr = []
    const recipes = this.props.recipes
    recipes.forEach( recipe => {
      if (!recipe.image.includes('http')) recipe.image = "https://spoonacular.com/recipeImages/" + recipe.image
      recipeArr.push(<Recipe key={`recipe-${recipe.id}`} source={recipe.sourceUrl} imgUrl={recipe.image} title={recipe.title} readyTime={recipe.readyInMinutes} servings={recipe.servings} diets={recipe.diets} missingFood={recipe.missedIngredientCount} />)
    })
    return (
      <div className='recipe-container'>
        <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='search' 
                    placeholder="Search for a recipe"
                    style = {{flex: '10', padding: '5px', borderRadius:'10px', border: '1px solid transparent', marginLeft:'15px', marginRight:'10px', marginTop:'5px', padding:'15px', fontSize:'1rem', boxShadow:'1px 1px 4px rgb(86, 55, 114)'}}
                    value={this.state.search}
                    onChange={this.onChange}
                    />
                <input 
                  type='submit' 
                  value='Search' 
                  className='btn' 
                  style={{flex: 1, marginRight: '5px', borderRadius:'10px', border: '1px solid transparent', marginTop:'5px', fontSize:'1rem',  boxShadow:'1px 1px 4px rgb(86, 55, 114)'}} 
                  />
            </form>
        <div className="recipe-list">
          {recipeArr}
        </div>
      </div>
    )
  }
}

export default RecipeList
