import React from 'react'
import IngredientsList from './IngredientsList'
import RecipeList from './RecipeList'

function Container(props) {
  return (
    <div className="container">
      <IngredientsList ingredients={props.ingredients} markChecked={props.markChecked} toggleAuto={props.toggleAuto} />
      <RecipeList recipes={props.recipes} searchRecipes={props.searchRecipes}  />
    </div>
  )
}

export default Container
