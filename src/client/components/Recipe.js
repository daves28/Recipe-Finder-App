import React from 'react'
import ImageFadeIn from 'react-image-fade-in'

function Recipe(props) {
  return (
    <div className='recipe'>
      <div className='recipe-img' style={{background:`url(${props.imgUrl}) center no-repeat`, backgroundSize:'cover'}}>
        <img src={props.imgUrl} />
      </div>
      <div className='recipe-info'>
        <div className='recipe-title'>
          <a href={props.source} target='_blank'>{props.title}</a>
        </div>
        <p className='details'><span className='black-text'>Ready in: </span>{props.readyTime} minutes</p>
        <p className='details'><span className='black-text'>Servings: </span>{props.servings}</p>
        <p className='details'>{props.diet}</p>
        <p className='details'><span className='black-text'># Missing ingredients: </span>{props.missingFood}</p>
      </div>
    </div>
  )
}

export default Recipe
