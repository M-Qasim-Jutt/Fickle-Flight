import React from 'react'
import './ThirdCard.css'

const ThirdCard = (props) => {
  return (
    <div className='third-card-main'>
      <img src={props.image} alt="" />
      <p id="cities-name">{props.city}</p>
      <p id="from-name">From</p>
      <p id="price-tag">{props.price}</p>
    </div>
  )
}

export default ThirdCard
