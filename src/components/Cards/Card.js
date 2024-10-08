import React from 'react'
import './cards.css'

function Cards (props) {
  return (
    <div className='cardFullContainer'>
        <img src={props.photo} alt='' className='imgCard'/>
        <div>
            <p className='cardDescription'>{props.description}</p>
        </div>
        <div className='cardPrice'>{props.prix} DA</div>
    </div>
  )
}

export default Cards