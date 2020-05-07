import React from 'react'

function Recipe(props) {
  return (
    <div className='recipe'>
      <img src={props.imgUrl} ></img>
      <a href={props.source}>{props.title}</a>
      <p className='details'>{props.readyTime} minutes</p>
      <p className='details'>{props.servings}</p>
      <p className='details'>{props.diet} servings</p>
    </div>
  )
}

export default Recipe
