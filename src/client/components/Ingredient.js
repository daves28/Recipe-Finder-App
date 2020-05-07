import React, { Component } from 'react'

class Ingredient extends Component {
  render() {
    const { id, foodName } = this.props.ingredient
    return (
      <div className='ingredient'>
        <input type='checkbox' onChange={this.props.markChecked.bind(this, id)} />
        {'  '}
        {foodName}
      </div>
    )
  }
}

export default Ingredient
