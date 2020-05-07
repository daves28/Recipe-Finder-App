import React from 'react'
import ImageFadeIn from 'react-image-fade-in'

function Recipe(props) {
  return (
    <div className='recipe'>
      <div className='recipe-img'>
        <ImageFadeIn src={props.imgUrl} />
      </div>
      <div className='recipe-info'>
        <div className='recipe-title'>
          <a href={props.source}>{props.title}</a>
        </div>
        <p className='details'><span className='black-text'>Ready in: </span>{props.readyTime} minutes</p>
        <p className='details'>{props.servings} servings</p>
        <p className='details'>{props.diet}</p>
      </div>
    </div>
  )
}

export default Recipe
