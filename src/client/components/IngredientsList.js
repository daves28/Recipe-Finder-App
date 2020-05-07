import React, { Component } from 'react'
import Ingredient from './Ingredient.js'
import AutoSearch from './AutoSearch.js'

class IngredientsList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {

    const dairyArr =[]
    const meatArr = []
    const spiceArr = []
    const vegArr = []
    const fishArr = []

    // console.log(this.props.ingredients)
    const ingredients = this.props.ingredients

    ingredients.forEach( ingredient => {
      switch (ingredient.category) {
        case 'dairy':
          dairyArr.push(<Ingredient key={`food-${ingredient.id}`} ingredient={ingredient} markChecked={this.props.markChecked} />)
            break
        case 'meat':
          meatArr.push(<Ingredient key={`food-${ingredient.id}`} ingredient={ingredient} markChecked={this.props.markChecked} />)
            break
        case 'spice':
          spiceArr.push(<Ingredient key={`food-${ingredient.id}`} ingredient={ingredient} markChecked={this.props.markChecked} />)
            break
        case 'vegetable':
          vegArr.push(<Ingredient key={`food-${ingredient.id}`} ingredient={ingredient} markChecked={this.props.markChecked} />)
            break
        case 'fish':
          fishArr.push(<Ingredient key={`food-${ingredient.id}`} ingredient={ingredient} markChecked={this.props.markChecked} />)
            break
      }
    })

    return (
      <div className='ingredients-list'>
        <div className='ingredient-header'>
          <h2>Select Your Ingredients</h2>
          <AutoSearch toggleAuto={this.props.toggleAuto} />
        </div>

        <h3>Dairy</h3>
        <div className='ingredient-section'>
          {dairyArr}
        </div>
        <h3>Meat</h3>
        <div className='ingredient-section'>
          {meatArr}
        </div>
        <h3>Fish</h3>
        <div className='ingredient-section'>
          {fishArr}
        </div>
        <h3>Spices</h3>
        <div className='ingredient-section'>
          {spiceArr}
        </div>
        <h3>Vegetables</h3>
        <div className='ingredient-section'>
          {vegArr}
        </div>
      </div>
    )
  }
}

export default IngredientsList
