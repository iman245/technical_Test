import React from 'react'
import './cards.css'

function CardSpecial (props) {
  return (
    <div className='cardSpecialContainer'>
        <div className='cardsImgContainer'>
            <img src={props.photo1} alt='' className='imgCardSpecial'/>
            <span className='imgCardSpecial2'>
                <img src={props.photo2} alt='' className='imgCardSpecial2Img'/>
            </span>
        </div>
        <div className='cardSpecialSection'>
            <div><p className='cardProductName'>{props.name}</p></div>
            <div><button className='cardButton'>shop all</button></div>
        </div>
    </div>
  )
}

export default CardSpecial